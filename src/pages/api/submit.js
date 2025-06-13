export async function POST({request}) {
    const formData = await request.formData();
    const fullName = formData.get("fullName");
    const emailAddress = formData.get("emailAddress");
    const companyName = formData.get("companyName");
    const timeline = formData.get("timeline");
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");
    const budget = formData.get("budget");
    const note = formData.get("note");

    return new Response(
        JSON.stringify({
            fullName,
            emailAddress,
            companyName,
            timeline,
            startDate,
            endDate,
            budget,
            note
        }),
        {
            status: 200,
            headers: {"Content-Type": "application/json"}
        }
    );
}