import Miku from "@miku";
import { ChannelPermissions, PermissionType } from "@miku/enum"
import type { Permissions } from "@miku/types"

export default abstract class Utils {

    protected tokenReplace = (token: string): string => token.replace('Bot', '').replace('Bearer', '').trim()

    protected setPermissions(users: Array<string>): Array<Permissions> {
        const usrs = users.map(id => ({ id, type: PermissionType.Member, allow: this.allow_permissions, deny: 0 }));
        return [...usrs, this.deny_permission_everyone()]
    }

    protected deny_permission_everyone(): Permissions {
        return { id: Miku.guild_id, type: PermissionType.Role, allow: 0, deny: this.allow_permissions }
    }

    protected channelName(name: string, limit: number = 100): string {
        return name.length > 100 ? name.substring(0, limit) : name
    }

    protected get allow_permissions(): number {

        let permissions: number = 0;

        for (const perm of Object.values(ChannelPermissions)) {
            const value = perm as number;
            if (!Number(value)) continue;
            permissions += value
        }

        return permissions
    }


}