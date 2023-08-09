export async function main() {
    return {
        statusCode: 200,
        headers: {
            "test-header": "test",
            "Cache-Control": "no-cache",
        },
        body: "test",
    }
}