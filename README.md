# 丫 (๑°Miku°๑)丫 .ᐟ.ᐟ »-v0.1.0→
╰ Miku é uma biblioteca para criação de salas de voice para quando os **duos** quiserem ir voice.<br>
╰ **[Duozada](https://app.duozada.com/)** é um `marketplace` para vende de serviços para jogos online. 

<img src="./docs/miku.gif" width="1000">

# (づ ᴗ _ᴗ)づ EXAMPLE ⋆˚✿˖°
```ts
import { Miku } from "@miku";

const miku = new Miku({
    token: '<TOKEN>',
    guild_id: '<GUILD_ID>',
    url: '<YOUR_WEBSITE_URL>'
});

const channel = await miku.create.voiceChannel({
    name: '<CHANNEL_NAME>',
    parent_id: '<CATEGORY_ID>',
    usersId: ['123', '321']
});

console.log(channel)
```

# ₊✩‧₊˚౨OUTPUTৎ˚₊✩‧₊

```json 
{
    "id": "123456790", // Channel Id
    "invite": "https://discord.com/channels/<GUILD_ID>/<CHANNEL_ID>" //Invite
}
```

# ⊹₊ ˚‧︵‿₊୨Discord Documentation୧₊‿︵‧ ˚ ₊⊹
`╰┈➤ˎˊ˗` **[JSON Error Codes](https://discord.com/developers/docs/topics/opcodes-and-status-codes)**<br>
`╰┈➤ˎˊ˗` **[Permissions](https://discord.com/developers/docs/topics/permissions#permissions)**<br>
`╰┈➤ˎˊ˗` **[Create Guild Channel](https://discord.com/developers/docs/resources/guild#create-guild-channel)**