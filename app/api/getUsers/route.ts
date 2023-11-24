// Import statements should use the correct case for the model name
import connectToDB from 'app/utils/connectMongo';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Initialize the database connection
    await connectToDB();

    const user = request.headers.get('user');
    console.log('user', user);
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
