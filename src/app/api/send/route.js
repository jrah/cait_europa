import { Resend } from 'resend';
import { EmailTemplate } from '@/components/Emails';
import { NextResponse } from 'next/server';


const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(res) {
    const response = await res.json()
    try {
        const data = await resend.emails.send({
            from: `Acme <mailer@resend.jameshome.co.uk>`,
            to: [response.to],
            subject: response.subject,
            react: EmailTemplate({ response }),
        });
        return NextResponse.json(data);
    } catch (error) {
        console.log("error", error)
        NextResponse.json(error);
    }
}

