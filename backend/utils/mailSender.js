import nodemailer from 'nodemailer';
import "dotenv/config";

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        const info = await transporter.sendMail({
            from: "STUDY NOTION",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(`info : - > ${info}`);
        return info

    } catch (err) {
        console.log("unable to send mail");
        console.log(err);
    }
}

export default mailSender;