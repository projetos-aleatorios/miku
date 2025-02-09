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

export type VoiceChannelResponse = ChannelStructure & { invite: string } | undefined;

export type ChannelStructure = {
    id: string;
    guild_id: string;
    type: number;
    name: string | null;
    position: number;
    permission_overwrites: Array<Permissions>;
    nsfw: boolean
    last_message_id: string | null;
    flags: number;
    parent_id: string | null;
    rate_limit_per_user?: number;
    bitrate?: number;
    user_limit?: number;
    rtc_region?: string | null;
}

export type Invite = {
    max_uses: number
}

export type Snowflake = string;

export type OmitChannel = 'permission_overwrites' | 'position' | 'user_limit';
export type ChannelOptions = Omit<Channel, OmitChannel>