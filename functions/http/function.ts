import { CORS_HEADERS} from "./consts.ts";

export async function main() {
    return {
        statusCode: 200,
        headers: {
            ...CORS_HEADERS,
            "Cache-Control": "no-cache",
        },
        body: "test",
    }
}