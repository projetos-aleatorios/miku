import { ChannelType } from "@miku/enum";
import ValidationError from "@miku/error";
import Guild from "./Guild";
import type { Channel, Instance, Options, VoiceChannel, VoiceChannelOptions, VoiceChannelResponse } from "@miku/types";

export default abstract class Client extends Guild {

    private readonly token: string;
    private readonly guild_id: string;
    private readonly url: string;

    private readonly _BASE_URL = 'https://discord.com/api'
    private readonly _VERSION = 10

    protected constructor(opts: Options) {
        super()
        this.token = this._token(opts.token);
        this.guild_id = opts.guild_id;
        this.url = opts.url
    }

    private _token = (token: string): string => token.replace('Bot', '').replace('Bearer', '').trim()

    private async instance<const T>({ method, endpoint, ...options }: Instance): Promise<T> {

        const response = await fetch(`${this._BASE_URL}/v${this._VERSION}/${endpoint}`, {
            method,
            headers: {
                'User-Agent': `DiscordBot (${this.url}, ${this._VERSION})`,
                'Content-Type': 'application/json;multipart/form-data',
                'Authorization': `Bot ${this.token}`
            },
            body: options.body ? JSON.stringify(options.body) : null
        })

        const data = await response.json()

        new ValidationError(data);
        return data
    }

    protected async voiceChannel(channel: VoiceChannelOptions): Promise<VoiceChannelResponse> {

        if (channel.usersId.length == 0) return;

        const users = channel.usersId;

        const response = await this.instance<VoiceChannel>({
            method: 'POST',
            endpoint: `guilds/${this.guild_id}/channels`,
            body: {
                ...channel,
                name: this.channelName(channel.name),
                user_limit: users.length,
                permission_overwrites: this.setPermissions(users),
                type: ChannelType.GUILD_VOICE,
                position: 0
            }
        })

        return {
            id: response.id,
            invite: `https://discord.com/channels/${response.guild_id}/${response.id}`
        }
    }

    protected async channel(id: string): Promise<Channel> {
        return await this.instance({ method: 'DELETE', endpoint: 'channels/'.concat(id) })
    }

}