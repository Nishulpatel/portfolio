"use server"

import { z } from "zod"
import { formSchema } from "./Schema"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/ui/email-tamplate"

const resend = new Resend(process.env.RESEND_API_KEY || "") 

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { data, error } = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FORM_EMAIL}>`, 
      to: [emailFormData.email],
      subject: "Welcome!",
      react: EmailTemplate({ firstName: emailFormData.fullName }),
    })

    if (error) {
      console.error("Resend Error:", error)
      return { success: false, error }
    }

    console.log("Email sent:", data)
    return { success: true, data }
  } catch (err) {
    console.error("Unexpected error:", err)
    return { success: false, error: "Unexpected server error" }
  }
}
