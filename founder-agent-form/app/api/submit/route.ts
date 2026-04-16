import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const credentials = {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    };

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Check if headers exist, if not create them
    const headerCheck = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1:S1",
    });

    if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "Sheet1!A1",
        valueInputOption: "RAW",
        requestBody: {
          values: [[
            "Submitted At", "Name", "WhatsApp", "Company", "Stage",
            "Capabilities", "Custom Capabilities", "Tools", "Other Tools",
            "Brief Time", "Response Style", "Autonomy",
            "More Time For", "Time Cost", "Never Touch",
          ]],
        },
      });
    }

    const row = [
      new Date().toISOString(),
      body.name,
      body.whatsapp,
      body.company,
      body.stage,
      Array.isArray(body.capabilities) ? body.capabilities.join(", ") : "",
      body.customCapabilities || "",
      Array.isArray(body.tools) ? body.tools.join(", ") : "",
      body.otherTools || "",
      body.briefTime || "",
      body.responseStyle || "",
      body.autonomy || "",
      body.moreTimeFor || "",
      body.timeCost || "",
      body.neverTouch || "",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sheet write error:", error);
    return NextResponse.json({ success: false, error: "Failed to save submission" }, { status: 500 });
  }
}
