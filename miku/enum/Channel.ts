export enum ChannelType {
    GUILD_TEXT,
    GUILD_VOICE = 2
}

export enum ChannelPermissions {
    STREAM = 0x0000000000000200,
    VIEW_CHANNEL = 0x0000000000000400,
    SEND_MESSAGE = 0x0000000000000800,
    READ_MESSAGE_HISTORY = 0x0000000000010000,
    CONNECT = 0x0000000000100000,
    SPEAK = 0x0000000000200000,
}

export enum PermissionType {
    Role,
    Member
}