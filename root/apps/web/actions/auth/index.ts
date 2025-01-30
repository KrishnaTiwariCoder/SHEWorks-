"use server";
import {User}  from "@repo/database";

export const registerIfNot = async (clerkId:any, name:any , phone:any , email:any) => {
  try {
    // Check if user already exists
    let user = await User.findOne({ clerkId });

    if (user) {
        console.log('User already exists:', user);
        return user;
    }

    // Create a new user
    User.create({name , email , phone}).then(()=>{
      console.log('User created successfully:', user);
    return user;
    })
    
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}

