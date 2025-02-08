import type { CustomError } from "@miku/types";

export default class MikuError extends Error implements CustomError {

    readonly code: number;
    readonly type: string;
    readonly error_details?: string | Array<string> | null;

    constructor({ code, type, message, error_details }: CustomError) {
        super()
        this.code = code
        this.type = type
        this.message = message
        this.error_details = error_details ?? null
    }
}