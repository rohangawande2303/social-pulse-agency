import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const PIXEL_ID = "1332003795606867";
        const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

        if (!ACCESS_TOKEN) {
            return NextResponse.json(
                { error: "Meta access token missing" },
                { status: 500 }
            );
        }

        const metaResponse = await fetch(
            `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: [
                        {
                            event_name: "Purchase",
                            event_time: Math.floor(Date.now() / 1000),
                            action_source: "website",
                            user_data: {
                                em: body.em, // hashed email array
                            },
                            custom_data: {
                                currency: "USD",
                                value: body.value,
                            },
                        },
                    ],
                }),
            }
        );

        const result = await metaResponse.json();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            { error: "Meta Conversion API failed" },
            { status: 500 }
        );
    }
}
