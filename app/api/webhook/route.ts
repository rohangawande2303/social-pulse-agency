import { NextRequest, NextResponse } from "next/server";

const VERIFY_TOKEN = "mywebhooktoken123";
const HUBTOWN_API_ENDPOINT =
  "https://hubtown.co.in/projects_enquiry/api_enquiry_submit.php";
const HUBTOWN_API_TOKEN =
  "80127a169034c63124f83aa5553ebd5a48319b27e1519cc4833716c24b93a9d1";
const PAGE_ACCESS_TOKEN =
  "EAFeW8uXs2qoBPwaZApW0F6w7JheC8eKXUiXftajrdkW8Kjs6XHi3H4bZCLcmBWq840OQXNmkv9GSgqwylPRi6EZBvclot4HHXteICubk38jzsmuVKzZA69hxK1BbxZBaXiEOrxRKtUpRMMgQr5Ro4LNX4KeNm3vJD8Sa4k7VS2XwLcBEvSt9PEZARDDFIsFCOaXgybvg4OPPOMETcHNEGpt198sK5O5bXAU4QKXHJ0yeLE084vCJ4JBalRaJqjdIljze2DZBMc3pAyrLKfyV1Wf";

// Your two Meta form IDs (verify these with your Meta Business account)
const FORM_ID_TC = "1177169097800298"; // Trade Centre
const FORM_ID_NS = "787144540553933"; // North Star

// Helper function to extract 10-digit mobile number
function extract10DigitMobile(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  // If it starts with country code (91 for India), remove it
  if (digits.startsWith("91") && digits.length > 10) {
    return digits.slice(-10);
  }

  // Return last 10 digits
  return digits.slice(-10);
}

// Meta webhook verification handler
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verified successfully");
    return new NextResponse(challenge, { status: 200 });
  } else {
    console.error("Webhook verification failed");
    return new NextResponse("Verification token mismatch", { status: 403 });
  }
}

// Meta lead delivery handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received webhook:", JSON.stringify(body, null, 2));

    const entries = body.entry;

    if (!entries || entries.length === 0) {
      return new NextResponse("No entries found", { status: 400 });
    }

    for (const entry of entries) {
      for (const change of entry.changes) {
        const leadgenId = change.value.leadgen_id;
        const formId = change.value.form_id;

        console.log(`Processing lead: ${leadgenId} from form: ${formId}`);

        // Fetch full lead info from Meta Graph API
        const leadResponse = await fetch(
          `https://graph.facebook.com/v17.0/${leadgenId}?access_token=${PAGE_ACCESS_TOKEN}`
        );

        if (!leadResponse.ok) {
          console.error(
            "Failed to fetch lead from Meta:",
            await leadResponse.text()
          );
          continue; // Skip this lead but continue processing others
        }

        const leadData = await leadResponse.json();
        console.log("Lead data from Meta:", JSON.stringify(leadData, null, 2));

        const answers = leadData.field_data || [];
        const getField = (field: string) => {
          const answer = answers.find((a: any) => a.name === field);
          return answer?.values?.[0] || "";
        };

        // Get lead form fields
        const fullName = getField("full_name");
        const email = getField("email");
        const phone = getField("phone_number");

        // Validate required fields
        if (!fullName || !email || !phone) {
          console.error("Missing required fields:", { fullName, email, phone });
          continue;
        }

        // Split fullName into first and last name
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0] || fullName;
        const lastName = nameParts.slice(1).join(" ") || firstName;

        // Extract 10-digit mobile number
        const mobile = extract10DigitMobile(phone);

        // Set defaults based on form ID
        let projectCode = "321/322"; // VERIFY with Hubtown team
        let projectName = "Trade Centre";
        let websiteName = "hubtown.co.in";
        let configuration = "Shops"; // VERIFY with Hubtown team
        let message = "Interested in Trade Centre Shops via Facebook lead.";
        let currentUrl = "https://www.hubtowntradecentre.com/";
        let source = "Facebook";

        // Customize based on form ID
        if (formId === FORM_ID_NS) {
          projectCode = "324"; // VERIFY with Hubtown team
          projectName = "North Star";
          configuration = "Shops"; // VERIFY with Hubtown team
          message = "Interested in North Star Shops via Facebook lead.";
          currentUrl = "https://www.hubtownnorthstar.in/";
        }

        // Prepare Hubtown API data
        const hubtownPayload = {
          first_name: firstName,
          last_name: lastName,
          country_code: "+91",
          mobile: mobile,
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

        console.log("Submitting to Hubtown CRM:", hubtownPayload);

        // Submit to Hubtown API
        const hubtownResponse = await fetch(HUBTOWN_API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${HUBTOWN_API_TOKEN}`,
          },
          body: new URLSearchParams(hubtownPayload).toString(),
        });

        const hubtownResult = await hubtownResponse.json();
        console.log("Hubtown API response:", hubtownResult);

        if (!hubtownResult.success) {
          console.error("Hubtown API error:", hubtownResult);
          // Continue processing other leads even if one fails
        } else {
          console.log("Successfully submitted lead to Hubtown CRM");
        }
      }
    }

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new NextResponse("Webhook server error", { status: 500 });
  }
}
