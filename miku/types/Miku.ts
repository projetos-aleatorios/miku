import type { PermissionType, ChannelType } from "@miku/enum";

export type Options = {
    token: string;
    guild_id: string;
    url: string
}

export type Instance = {
    method: 'GET' | 'POST' | 'DELETE';
    endpoint: string;
    body?: Channel
}

export type Channel = {
    name?: string;
    type: ChannelType;
    user_limit: number;
    parent_id: string;
    permission_overwrites: Array<Permissions>;
    position: number;
    usersId: Array<string>
}

export type Permissions = {
    id: string;
    type: PermissionType;
    allow: number;
    deny?: number
}

export type VoiceChannelResponse = {
    id: string;
    invite: string
} | undefined

export type ChannelResponse = {
    id: string,
    type: number,
    last_message_id: Array<string> | null,
    flags: number,
    guild_id: string,
    name: string | null,
    parent_id: string | null,
    rate_limit_per_user: number,
    bitrate: number,
    user_limit: number,
    rtc_region: null,
    position: number,
    nsfw: boolean
}

export type ChannelOmit = 'permission_overwrites' | 'type' | 'position' | 'user_limit';
export type VoiceChannelOptions = Omit<Channel, ChannelOmit>