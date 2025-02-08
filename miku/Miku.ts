import type { ChannelResponse, Options, VoiceChannelOptions, VoiceChannelResponse } from "@miku/types";
import VoiceChannel from "./VoiceChannel";

interface VoiceMethods {
    create(channel: VoiceChannelOptions): Promise<VoiceChannelResponse>
    delete(id: string): Promise<ChannelResponse>
}

export default class Miku {

    private static id: string;

    public constructor(public readonly opts: Options) {
        Miku.id = opts.guild_id;
    }

    public static get guild_id(): string {
        return this.id
    }

    public get voiceChannel(): VoiceMethods {
        return new VoiceChannel(this.opts)
    }

}