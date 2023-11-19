import connectToDB from 'app/utils/connectMongo';
import userModel from 'app/utils/model/user';
import { NextResponse } from 'next/server';

connectToDB();

export async function POST(request: Request, response: Response) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    const user = await userModel.findOne({
      verifyToken: token,
      verifyExpires: { $gt: Date.now() }
    });

    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
    }

    user.userIsVerified = true;
    user.verifyToken = undefined!;
    user.verifyExpires = undefined!; // provide a default value

    await user.save(); // <-- Save the updated user to the database
    console.log('user saved');
    return NextResponse.json({ message: 'Success' });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
