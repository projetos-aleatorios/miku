import MikuBeam from "@miku/errors/MikuBeam";
import Utils from "./Utils";
import type { Instance, Options } from "@miku/types/Miku";
import { version } from "@miku/package";
import { restOptions } from "@miku/constants";

export default abstract class Client extends Utils {

    private readonly token: string;
    private readonly url: string;

    protected constructor(protected readonly opts: Options) {
        super()
        this.token = this.tokenReplace(opts.token);
        this.url = opts.url
    }

    protected async instance<const T>({ method, endpoint, ...options }: Instance): Promise<T> {

        const response = await fetch(`${restOptions.api}/v${restOptions.version}/${endpoint}`, {
            method,
            headers: {
                'User-Agent': `DiscordBot (${this.url}, ${version})`,
                'Content-Type': 'application/json',
                'Authorization': `Bot ${this.token}`
            },
            body: options.body ? JSON.stringify(options.body) : null
        })

        const data: T = await response.json()

        if (!response.ok) {
            new MikuBeam(data);
        }

        return data
    }
}