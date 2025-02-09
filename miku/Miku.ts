import type { Options } from "@miku/types/Miku";
import type { ChannelOptions, VoiceChannelResponse, ChannelStructure } from "@miku/types/Channel";
import Channel from "./Channel";

interface ChannelMethods {
    create(channel: ChannelOptions): Promise<VoiceChannelResponse>
    delete(id: string): Promise<ChannelStructure>
}

export default class Miku {

    private static id: string;

    public constructor(public readonly opts: Options) {
        Miku.id = opts.guild_id;
    }

    public static get guild_id(): string {
        return this.id
    }

    public get channel(): ChannelMethods {
        return new Channel(this.opts)
    }

}