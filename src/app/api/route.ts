export async function GET(request: Request) {
    console.log('GET request received');
    console.log(request);
    return new Response('GET request received');

}