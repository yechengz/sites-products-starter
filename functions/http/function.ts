const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
}

export async function main() {
    return {
        statusCode: 200,
        headers: {
            ...CORS_HEADERS,
            "Cache-Control": "max-age=0, must-revalidate",
        },
        body: "test",
    }
}