// Import statements should use the correct case for the model name
import connectToDB from 'app/utils/connectMongo';
import PhoneSubmission from 'app/utils/model/iphone';
import MacBookModel from 'app/utils/model/macbook';
import { NextResponse } from 'next/server';

interface UpdateSubmissionStatusRequest {
  _id: string;
  status: string; // Include the new status value here
}

export async function PUT(request: Request) {
  try {
    // Initialize the database connection
    await connectToDB();

    // Retrieve the submission ID and new status from the request body
    const { _id, status } = (await request.json()) as UpdateSubmissionStatusRequest;

    // Update the submission's status by ID
    await PhoneSubmission.findByIdAndUpdate(_id, { status });
    await MacBookModel.findByIdAndUpdate(_id, { status });

    // Respond with a success message
    return new NextResponse(JSON.stringify({ message: 'Submission status updated successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error updating submission status:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
