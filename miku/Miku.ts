import type { ChannelResponse, Options, VoiceChannelOptions, VoiceChannelResponse } from "@miku/types";
import VoiceChannel from "./VoiceChannel";

interface VoiceCh {
    create(channel: VoiceChannelOptions): Promise<VoiceChannelResponse>
    delete(id: string): Promise<ChannelResponse>
}

export default class Miku {

    public static guild_id: string;

    public constructor(public readonly opts: Options) {
        Miku.guild_id= opts.guild_id;
    }

    public get voiceChannel(): VoiceCh {
        return new VoiceChannel(this.opts)
    }

}