// 'use server'
'use server'

import { db } from "@/db"
import { guests } from "@/db/schema"




type Gender = "male" | "female" 
type Fasting = "yes" | "no"
export const registerDevs = async (firstName: string , lastName: string, email:string , gender:string, fasting:string , comment: string ) => {
    const registered = await db.insert(guests).values({
       email: email,
       firstName:firstName,
       lastName:lastName,
       phone:"212012121",
       gender: gender,
       fasting: fasting,
       comment: comment
    })
    
}