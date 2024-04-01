// 'use server'
'use server'

import { db } from "@/db"
import { guests } from "@/db/schema"




type Gender = "male" | "female" 
type Fasting = "yes" | "no"
export const registerDevs = async (firstName: string , lastName: string, email:string , phone: string , gender:string, fasting:string , comment: string , status: string , profession: string ) => {
    const registered = await db.insert(guests).values({
       email: email,
       firstName:firstName,
       lastName:lastName,
       phone:phone,
       gender: gender,
       fasting: fasting,
       comment: comment,
       status: status,
       profession: profession,
    })
    return registered
    
}