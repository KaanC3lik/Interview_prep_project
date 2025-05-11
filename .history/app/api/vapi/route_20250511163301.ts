export async function get() {
    return Response.json({ success: true, data: "THANK YOU" }, { status: 200 })
}