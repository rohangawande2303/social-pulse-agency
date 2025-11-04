import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = "mywebhooktoken123";
const HUBTOWN_API_ENDPOINT =
  "https://hubtown.co.in/projects_enquiry/api_enquiry_submit.php";
const HUBTOWN_API_TOKEN =
  "80127a169034c63124f83aa5553ebd5a48319b27e1519cc4833716c24b93a9d1";
const PAGE_ACCESS_TOKEN =
  "EAFeW8uXs2qoBPwaZApW0F6w7JheC8eKXUiXftajrdkW8Kjs6XHi3H4bZCLcmBWq840OQXNmkv9GSgqwylPRi6EZBvclot4HHXteICubk38jzsmuVKzZA69hxK1BbxZBaXiEOrxRKtUpRMMgQr5Ro4LNX4KeNm3vJD8Sa4k7VS2XwLcBEvSt9PEZARDDFIsFCOaXgybvg4OPPOMETcHNEGpt198sK5O5bXAU4QKXHJ0yeLE084vCJ4JBalRaJqjdIljze2DZBMc3pAyrLKfyV1Wf"; // Use your actual token

// Your two Meta form IDs here (replace with real values)
const FORM_ID_TC = "1177169097800298";
const FORM_ID_NS = "787144540553933";

// Meta webhook verification handler
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

// Meta lead delivery handler
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

        const answers = leadData.answers || [];
        const getField = (field: string) => {
          const answer = answers.find((a: any) => a.name === field);
          return answer ? answer.text : "";
        };

        // Get lead form fields
        const fullName = getField("full_name");
        const email = getField("email");
        const phone = getField("phone_number");

        // Split fullName into first and last name (if possible)
        const [firstName, ...rest] = fullName.split(" ");
        const lastName = rest.join(" ") || firstName;

        // Set defaults - will override based on form ID below
        let projectCode = "P123"; // Default to Trade Centre code
        let projectName = "Trade Centre";
        let websiteName = "hubtown.co.in";
        let configuration = "Shops";
        let message = "Interested in Trade Centre Shops via Facebook lead.";
        let currentUrl = "https://www.hubtown.co.in/trade-centre";
        let source = "Facebook";

        // Use form_id to customize per project
        if (change.value.form_id === FORM_ID_NS) {
          projectCode = "P456";
          projectName = "North Star";
          websiteName = "hubtown.co.in";
          configuration = "Shops";
          message = "Interested in North Star Shops via Facebook lead.";
          currentUrl = "https://www.hubtown.co.in/north-star";
          source = "Facebook";
        }

        // Prepare Hubtown API data
        const hubtownPayload = {
          first_name: firstName,
          last_name: lastName,
          country_code: "+91",
          mobile: phone,
          email: email,
          source: source,
          project_code: projectCode,
          projectname: projectName,
          website_name: websiteName,
          configuration: configuration,
          message: message,
          current_url: currentUrl,
          website: "", // Honeypot (leave empty)
        };

        // Submit to Hubtown API
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
