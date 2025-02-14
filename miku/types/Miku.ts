import type { Channel, Invite } from "./Body";

export type Options = {
    token: string;
    guild_id: string;
    url: string
}

export type Instance = {
    method: 'GET' | 'POST' | 'DELETE';
    endpoint: string;
    body?: Channel | Invite
}