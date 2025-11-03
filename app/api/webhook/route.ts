import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = "mywebhooktoken123";
const HUBTOWN_API_ENDPOINT =
  "https://hubtown.co.in/projects_enquiry/api_enquiry_submit.php";
const HUBTOWN_API_TOKEN =
  "80127a169034c63124f83aa5553ebd5a48319b27e1519cc4833716c24b93a9d1";
const PAGE_ACCESS_TOKEN =
  "EAFeW8uXs2qoBPwaZApW0F6w7JheC8eKXUiXftajrdkW8Kjs6XHi3H4bZCLcmBWq840OQXNmkv9GSgqwylPRi6EZBvclot4HHXteICubk38jzsmuVKzZA69hxK1BbxZBaXiEOrxRKtUpRMMgQr5Ro4LNX4KeNm3vJD8Sa4k7VS2XwLcBEvSt9PEZARDDFIsFCOaXgybvg4OPPOMETcHNEGpt198sK5O5bXAU4QKXHJ0yeLE084vCJ4JBalRaJqjdIljze2DZBMc3pAyrLKfyV1Wf"; // Use your actual token

// Handle Meta webhook verification (GET)
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  } else {
    return new NextResponse("Verification token mismatch", { status: 403 });
  }
}

// Handle Meta lead notifications (POST)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const entries = body.entry;

    for (const entry of entries) {
      for (const change of entry.changes) {
        const leadgenId = change.value.leadgen_id;

        // Fetch full lead info from Meta Graph API
        const leadResponse = await fetch(
          `https://graph.facebook.com/v17.0/${leadgenId}?access_token=${PAGE_ACCESS_TOKEN}`
        );
        const leadData = await leadResponse.json();

        // Extract fields based on your lead form
        const answers = leadData.answers || [];
        const getField = (field: string) => {
          const answer = answers.find((a: any) => a.name === field);
          return answer ? answer.text : "";
        };

        // Use only name, email, phone; set both first/last name to 'name' field
        const nameValue = getField("name");
        const emailValue = getField("email");
        const phoneValue = getField("phone");

        // Prepare Hubtown API data (minimum required)
        const hubtownPayload = {
          first_name: nameValue,
          last_name: nameValue,
          country_code: "+91",
          mobile: phoneValue,
          email: emailValue,
          source: "Facebook Lead",
          projectname: "",
          message: "",
        };

        // Submit to Hubtown API (urlencoded)
        await fetch(HUBTOWN_API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${HUBTOWN_API_TOKEN}`,
          },
          body: new URLSearchParams(hubtownPayload).toString(),
        });
      }
    }
    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new NextResponse("Webhook server error", { status: 500 });
  }
}
