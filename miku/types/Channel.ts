import type { ChannelType, PermissionType } from "@miku/enum";

export type Channel = {
    name?: string;
    type?: ChannelType;
    user_limit: number;
    parent_id?: string;
    permission_overwrites: Array<Permissions>;
    position: number;
    usersId: Array<Snowflake>
}

export type Permissions = {
    id: Snowflake;
    type: PermissionType;
    allow: number;
    deny?: number
}

export type VoiceChannelResponse = {
    id: string;
    invite: string
} | undefined

export type ChannelStructure = {
    id: string;
    type: number;
    last_message_id: Array<string> | null;
    flags: number;
    guild_id: string;
    name: string | null;
    parent_id: string | null;
    rate_limit_per_user: number;
    bitrate: number;
    user_limit: number;
    rtc_region: null;
    position: number;
    nsfw: boolean
}

export type Invite = {
    max_uses: number
}

export type Snowflake = string;

export type OmitChannel = 'permission_overwrites' | 'position' | 'user_limit';
export type ChannelOptions = Omit<Channel, OmitChannel>