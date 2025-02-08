# 丫 (๑°Miku°๑)丫 .ᐟ.ᐟ »-v0.1.3→
╰ `Miku` é uma biblioteca para criação de salas de voz no Discord, ideal para quando os duos desejam se comunicar após adquirir um serviço no **[Duozada](https://app.duozada.com/)**. <br>
╰ **[Duozada](https://app.duozada.com/)** é um `marketplace` para venda de serviços para jogos online. 

<img src="./docs/miku.gif" width="1000">

# (づ ᴗ _ᴗ)づ EXAMPLE ⋆˚✿˖°
```ts
import Miku from "@miku";
import MikuError from "@miku/error/Error";

const miku = new Miku({
    token: '<TOKEN>',
    guild_id: '<GUILD_ID>',
    url: '<YOUR_WEBSITE_URL>'
});

try {
    const channel = await miku.voiceChannel.create({
    name: '<CHANNEL_NAME>',
    parent_id: '<CATEGORY_ID>',
    usersId: ['123', '321']
});

console.log(channel)

} catch(e: unknown) {
    if(e instanceof MikuError) return console.error(e)
}
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