import connectToDB from 'app/utils/connectMongo';
import PhoneSubmission from 'app/utils/model/retrieveIphoneSubmissions';
import { NextResponse } from 'next/server';
import MacBookModel from '../../../utils/model/macbook'; // Import the MacBook model

export async function POST(request: Request) {
  try {
    connectToDB();
    const data = await request.json();

    // Check if the submission is for an iPhone or a MacBook
    if (data.phoneModel) {
      // Handle iPhone submission
      const { phoneModel, storage, condition, price, color, userId, instantCash } = data;
      await PhoneSubmission.create({
        phoneModel,
        storage,
        condition,
        price,
        color,
        userId,
        instantCash
      });
      console.log('iPhone entry created successfully');
    } else if (data.macModel) {
      // Handle MacBook submission
      const {
        macModel,
        screen,
        year,
        instantCash,
        processor,
        ram,
        storage,
        gpu,
        price,
        userId,

        submissionDate
      } = data;
      await MacBookModel.create({
        macModel: macModel,
        screenSize: screen,
        releaseDate: year,
        processor,
        ram,
        storage,
        gpu,
        price,
        userId,
        submissionDate,
        instantCash
      });
      console.log('MacBook entry created successfully');
    } else {
      // Invalid submission data
      throw new Error('Invalid submission data');
    }

    // Return a success response
    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    // If an error occurs, log it to the console and return an error response
    console.error('Error creating entry:', error);
    return NextResponse.json({ error: 'Failed to create entry' }, { status: 500 });
  }
}
