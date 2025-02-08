import type { Channel, VoiceChannelResponse, Options, VoiceChannelOptions } from "@miku/types";
import Client from "./Client";

interface Methods {
    get create(): Create;
    get delete(): Delete
}

interface Create {
    voiceChannel: (channel: VoiceChannelOptions) => Promise<VoiceChannelResponse>
}

interface Delete {
    voiceChannel(id: string): Promise<Channel>
}

export default class Miku extends Client implements Methods {

    public constructor(opts: Options) {
        super(opts)
    }

    public get create(): Create {
        return {
            voiceChannel: async (channel: VoiceChannelOptions): Promise<VoiceChannelResponse> => await this.voiceChannel(channel)
        }
    }

    public get delete(): Delete {
        return {
            voiceChannel: async (id: string): Promise<Channel> => await this.channel(id)
        }
    }
}