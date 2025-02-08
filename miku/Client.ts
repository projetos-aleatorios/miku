import ValidationError from "@miku/error/ValidationError";
import Utils from "./Utils";
import type { Instance, Options } from "@miku/types";

export default abstract class Client extends Utils {

    private readonly token: string;
    private readonly url: string;

    private readonly _BASE_URL = 'https://discord.com/api'
    private readonly _VERSION = 10

    protected constructor(opts: Options) {
        super()
        this.token = this.tokenReplace(opts.token);
        this.url = opts.url
    }

    protected async instance<const T>({ method, endpoint, ...options }: Instance): Promise<T> {

        const response = await fetch(`${this._BASE_URL}/v${this._VERSION}/${endpoint}`, {
            method,
            headers: {
                'User-Agent': `DiscordBot (${this.url}, ${this._VERSION})`,
                'Content-Type': 'application/json',
                'Authorization': `Bot ${this.token}`
            },
            body: options.body ? JSON.stringify(options.body) : null
        })

        const data: T = await response.json()

        new ValidationError(data);
        return data
    }
}