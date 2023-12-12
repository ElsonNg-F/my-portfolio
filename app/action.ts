"use server"
import { revalidatePath } from "next/cache";
import prisma from "../app/db";

// NextJS Server Action
export async function postEntry(formData: FormData) {
    "use server";
    
    const data = await prisma?.guestbook.create({
        data: {
            message: formData.get('entry') as string,
            username: "hello"
        }
    });

    revalidatePath("/guestbook");
}