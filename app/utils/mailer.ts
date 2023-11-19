import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import userModel from './model/user';

interface SendEmailProps {
  email: string;
  emailType: string;
  userId: string;
}

const sendEmail = async ({ email, emailType, userId }: SendEmailProps) => {
  try {
    // Create a hash token
    const hashToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === 'VERIFY') {
      await userModel.findByIdAndUpdate(
        userId,
        {
          verifyToken: hashToken,
          verifyExpires: Date.now() + 3600000
        },
        { new: true, runValidators: true }
      );
    } else if (emailType === 'RESET') {
      await userModel.findByIdAndUpdate(
        userId,
        {
          forgotPasswordToken: hashToken,
          forgotPasswordExpires: Date.now() + 3600000
        },
        { new: true, runValidators: true }
      );
    }

    // Initialize transporter
    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '2a2d1198dc6b21',
        pass: '4ce14b2a5a5e2a'
        // TODO: Use environment variables instead of hardcoding values
      }
    });

    const mailOptions = {
      to: email,
      from: 'duncanmatthews15@gmail.com',
      subject: emailType === 'VERIFY' ? 'Verify your account' : 'Reset your password',
      html: `<p><a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">Click here</a> to ${
        emailType === 'VERIFY' ? 'verify your email' : 'reset your password'
      } or copy the link below <br><a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}">${
        process.env.DOMAIN
      }/verifyemail?token=${hashToken}</a> </p>`
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default sendEmail;
