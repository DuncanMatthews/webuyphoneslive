import connectToDB from 'app/utils/connectMongo';
import sendEmail from 'app/utils/mailer';
import userModal from 'app/utils/model/user';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

interface SendEmailProps {
  email: string;
  emailType: string;
  userId: string;
}

export async function POST(request: Request, response: Response) {
  await connectToDB();

  const { cellphone, email, password } = await request.json();

  try {
    const alreadyExistsEmail = await userModal.findOne({ email }).exec();

    console.log(alreadyExistsEmail);

    if (alreadyExistsEmail) {
      return NextResponse.json({ message: 'Email is already registered!' }, { status: 409 });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const newUser = new userModal({
      cellphone,
      email,
      password: hashedPassword
    });

    await newUser.save();

    //send verification email
    await sendEmail({ email, emailType: 'VERIFY', userId: newUser._id });
  } catch (err: any) {
    const errorMessage = err.message || 'Unknown error occurred!';
    console.log(errorMessage);

    return NextResponse.json(
      { message: 'Something went wrong!', error: errorMessage },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: 'User created successfully!' }, { status: 201 });
}
