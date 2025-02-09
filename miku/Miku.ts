import type { Options } from "@miku/types/Miku";
import type { ChannelOptions, ChannelResponse, ChannelDeleteResponse } from "@miku/types/Channel";
import Channel from "./Channel";

interface ChannelMethods {
    create(channel: ChannelOptions): Promise<ChannelResponse>
    delete(id: string): Promise<ChannelDeleteResponse>
}

export default class Miku {

    private static id: string;

    public constructor(private readonly opts: Options) {
        Miku.id = opts.guild_id;
    }

    public static get guild_id(): string {
        return this.id
    }

    public get channel(): ChannelMethods {
        return new Channel(this.opts)
    }

}