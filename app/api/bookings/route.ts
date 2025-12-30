import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, message } = body;

    // Validate required fields
    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Prepare row data
    const timestamp = new Date().toISOString();
    const values = [
      [
        timestamp,
        name,
        email || '',
        phone,
        date,
        time,
        guests || '',
        message || '',
        'Pending' // Status column
      ],
    ];

    // Append data to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Bookings!A:I', // Adjust sheet name if needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json(
      { message: 'Booking submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting booking:', error);
    return NextResponse.json(
      { error: 'Failed to submit booking. Please try again.' },
      { status: 500 }
    );
  }
}
