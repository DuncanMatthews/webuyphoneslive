import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'public/images/data');
const filename = 'data.json'; // Constant filename
const filePath = path.join(dataDirectory, filename);

export async function POST(request: Request): Promise<Response> {
  try {
    // Ensure the data directory exists
    if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory, { recursive: true });
    }

    // Parse the JSON from the request body
    const jsonData = await request.json();

    // Write JSON data to the file
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    // Return a success response
    return new Response(JSON.stringify({ message: 'Data saved successfully!' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error saving data:', error);

    // Return an error response
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
