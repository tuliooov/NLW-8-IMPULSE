import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "02525600867ae1",
      pass: "69317d8a5d9d56"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({body, subject}: SendMailData){

    await transport.sendMail({
        from: "Equipe Feedget <oi@feedgat.com>",
        to: "Marco Túlio <marcotuliovaleriano2014@gmail.com>",
        subject,
        html: body,
    })

        
    };
}