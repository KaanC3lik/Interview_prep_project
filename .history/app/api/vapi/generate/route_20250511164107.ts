export async function GET() {
    return Response.json({ success: true, data: "THANK YOU" }, { status: 200 });
}

export async function POST(request: Request) {
    const { type, role, level, techstack, amount, userid } = await request.json();

    try {

    } catch (error) {
        console.log(error)

        return Response.json({ success: false, error }, { status: 500 })
    }
}