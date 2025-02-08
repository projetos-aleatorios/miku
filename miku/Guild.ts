import { ChannelPermissions } from "@miku/enum"
import type { Permissions } from "@miku/types"

export default abstract class Guild {

    protected setPermissions(users: Array<string>): Array<Permissions> {

        const user: Array<Permissions> = []

        for (const id of users) {
            for (const permissions of this.allow_permissions()) {
                user.push({
                    id,
                    type: 1,
                    allow: permissions,
                })
            }
        }

        return user
    }

    protected allow_permissions(): Array<number> {

        const permissions: Array<number> = []

        for (const perm of Object.values(ChannelPermissions)) {
            const value = perm as number;
            if (!Number(value)) continue;
            permissions.push(value)
        }

        return permissions
    }

    protected channelName(name: string, limit: number = 100): string {
        return name.length > 100 ? name.substring(0, limit) : name
    }

}