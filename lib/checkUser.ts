import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma"


export const checkUser = async () =>{
  const user = await currentUser()

  if(!user) return null
  try {
   const loggedInUser = await db?.user.findUnique({
       where :{
          clerkUserId : user.id,
       }
   });

   if(loggedInUser) {
     return loggedInUser
   }

   const userName = `${user.firstName} ${user.lastName}`;

   const newUser = await  db.user.create({
     data:{
      clerkUserId : user.id,
      name :userName,
      imageUrl :user.imageUrl,
      email : user.emailAddresses[0].emailAddress
     }
   });
   return newUser
  }catch(ex){
    console.log(ex);
  }
  

}