// Import statements should use the correct case for the model name
import connectToDB from 'app/utils/connectMongo';
import PhoneSubmission from 'app/utils/model/iphone';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Initialize the database connection
    await connectToDB();

    // Retrieve phone data from the database
    const data = await PhoneSubmission.find().populate('userId');

    // Respond with the retrieved data
    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching phone data:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
