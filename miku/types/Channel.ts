import type { PermissionType } from "@miku/enum";
import type { Guild } from "./Guild";
import type { User } from "./User";
import type { Channel } from "./Body";

export type Snowflake = string;

export type Permissions = {
    id: Snowflake;
    type: PermissionType;
    allow: number;
    deny?: number
}

export type ChannelStructure = {
    id: Snowflake;
    type: number;
    last_message_id: string | null;
    flags: number;
    guild_id: Snowflake;
    name: string | null;
    parent_id: string | null;
    rate_limit_per_user?: number;
    bitrate?: number;
    user_limit?: number;
    rtc_region?: string | null
    position: number;
    permission_overwrites: Array<Permissions>;
    nsfw: boolean
}

export type InviteStructure = {
    type: number;
    code: string;
    inviter?: User;
    max_age: number;
    created_at: string;
    expires_at?: string | null;
    guild?: Guild;
    guild_id: Snowflake;
    channel: Pick<ChannelStructure, 'id' | 'type' | 'name'> | null;
    uses: number;
    max_uses: number;
    temporary: boolean
}

export type ChannelResponse = ChannelStructure & { invite: string } | undefined;
export type ChannelDeleteResponse = ChannelStructure;
export type InviteResponse = InviteStructure & { url: string } | undefined;
export type ChannelOptions = Omit<Channel, 'permission_overwrites' | 'position' | 'user_limit'>