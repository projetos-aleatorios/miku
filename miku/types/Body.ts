import type { ChannelType } from "@miku/enum";
import type { Snowflake, Permissions } from "./Channel";

export type Channel = {
    name?: string;
    type?: ChannelType;
    user_limit: number;
    parent_id?: string;
    permission_overwrites: Array<Permissions>;
    position: number;
    usersId: Array<Snowflake>
}

export type Invite = {
    max_uses: number
}