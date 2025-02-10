# 丫 (๑°Miku°๑)丫 .ᐟ.ᐟ »-v0.1.7→
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
    const channel = await miku.channel.create({
        type: ChannelType.GUILD_VOICE, //Optional
        name: '<CHANNEL_NAME>', //Optional
        parent_id: '<CATEGORY_ID>', //Optional
        usersId: ['123', '321']
});

console.log(channel)

} catch (e: unknown) {
    if (e instanceof MikuError) {
        console.error({ ...e })
    }
}
```

# ₊✩‧₊˚౨OUTPUTৎ˚₊✩‧₊

```json 
{
  id: "<CHANNEL_ID>",
  type: 2,
  last_message_id: null,
  flags: 0,
  guild_id: "<GUILD_ID>",
  name: "<CHANNE_NAME>",
  parent_id: "<CATEGORY_ID>",
  rate_limit_per_user: 0,
  bitrate: 64000,
  user_limit: 2,
  rtc_region: null,
  position: 0,
  permission_overwrites: [],
  nsfw: false,
  invite: "https://discord.gg/<CODE>"
}
```

# ⊹₊ ˚‧︵‿₊୨Discord Documentation୧₊‿︵‧ ˚ ₊⊹
`╰┈➤ˎˊ˗` **[JSON Error Codes](https://discord.com/developers/docs/topics/opcodes-and-status-codes)**<br>
`╰┈➤ˎˊ˗` **[Permissions](https://discord.com/developers/docs/topics/permissions#permissions)**<br>
`╰┈➤ˎˊ˗` **[Create Guild Channel](https://discord.com/developers/docs/resources/guild#create-guild-channel)**