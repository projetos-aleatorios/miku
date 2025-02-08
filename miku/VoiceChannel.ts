import { ChannelType } from "@miku/enum";
import type { Options, ChannelResponse, VoiceChannelOptions, VoiceChannelResponse } from "@miku/types";
import Client from "./Client";
import Miku from "@miku";

export default class VoiceChannel extends Client {

    public constructor(public readonly opts: Options) {
        super(opts)
    }

    public async create(channel: VoiceChannelOptions): Promise<VoiceChannelResponse> {

        if (channel.usersId?.length == 0) return;

        const users = channel.usersId;
        const name = channel?.name ?? `duo-${users.at(0)}`;

        const response = await this.instance<ChannelResponse>({
            method: 'POST',
            endpoint: `guilds/${Miku.guild_id}/channels`,
            body: {
                ...channel,
                name: this.channelName(name),
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

    public async delete(id: string): Promise<ChannelResponse> {
        return await this.instance({ method: 'DELETE', endpoint: 'channels/'.concat(id) })
    }

}