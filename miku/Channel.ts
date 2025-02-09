import type { Options } from "@miku/types/Miku";
import type { ChannelStructure, ChannelOptions, VoiceChannelResponse } from "@miku/types/Channel";
import Client from "./Client";
import Miku from "@miku";
import { ChannelType } from "@miku/enum";

export default class Channel extends Client {

    public constructor(public readonly opts: Options) {
        super(opts)
    }

    public async create({ type = ChannelType.GUILD_VOICE, ...channel }: ChannelOptions): Promise<VoiceChannelResponse> {

        if (channel.usersId?.length == 0) return;

        const users = channel.usersId;
        const name = channel?.name ?? `duo-${users.at(0)}`;

        const response = await this.instance<ChannelStructure>({
            method: 'POST',
            endpoint: `guilds/${Miku.guild_id}/channels`,
            body: {
                ...channel,
                type,
                name: this.channelName(name),
                user_limit: users.length,
                permission_overwrites: this.setPermissions(users),
                position: 0
            }
        })

        const invite = undefined //await this.invite(response.id, users.length);

        return {
            id: response.id,
            invite: invite ?? `https://discord.com/channels/${response.guild_id}/${response.id}`
        }
    }

    public async delete(id: string): Promise<ChannelStructure> {
        return await this.instance({ method: 'DELETE', endpoint: 'channels/'.concat(id) })
    }

    private async invite(id: string, max_uses: number): Promise<string | undefined> {
        try {
            const response = await this.instance<{ code: string }>({ method: 'POST', endpoint: `channels/${id}/invites`, body: { max_uses } })
            return 'https://discord.gg/'.concat(response.code)
        } catch (e) { return }
    }
}