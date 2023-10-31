import { Resend } from 'resend';
import { EmailTemplate } from '@/components/Emails';

const resend = new Resend(process.env.RESEND_API_KEY);

console.log('test')

export async function POST(req, res) {
    console.log('test')
    debugger
    console.log(JSON.parse(req.body), req, res, 'test');
    try {
        const { email } = JSON.parse(req.body);

        const data = await resend.sendEmail({
            from: "jameshome@jameshome.co.uk",
            to: "jameshome@jameshome.co.uk",
            subject: "🎉New submission to your contact form!",
            html: "",
            react: EmailTemplate({ email })
        });
        console.log("hello")

        res.status(200).json(data);
    } catch (error) {
        console.log("hello")
        res.status(400).json(error);
    }
}