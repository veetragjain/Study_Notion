import mongoose from 'mongoose';
import mailSender from '../utils/mailSender.js';
import emailTemplate from '../mail_template/emailVerifactionTemplate.js';
const otpSchema = new mongoose.Schema({

    email: {
        type: String,
        require: true
    },
    otp: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60
    }

})

async function sendVerificationEmail(email, otp) {

    try {
        const mailResponse = await mailSender(email, "verification email from study notion", emailTemplate(otp))
        console.log(`successfully sent verification email : - > ${mailResponse}`);
    } catch (err) {
        console.log("not able to send verification email");
        console.log(err);
    }

}

otpSchema.pre("save", async function (next) {
    sendVerificationEmail(this.email, this.otp)
    next();
})

const Otp = mongoose.model("Otp", otpSchema);
export default Otp;