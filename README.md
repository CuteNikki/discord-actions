# discord-actions

A package that fetches a ton of different GIFs from many APIs.

[![npm](https://img.shields.io/npm/v/discord-actions.svg)](https://www.npmjs.com/package/discord-actions)
[![npm](https://img.shields.io/npm/dt/discord-actions.svg?maxAge=3600)](https://www.npmjs.com/package/discord-actions)
[![install size](https://packagephobia.now.sh/badge?p=discord-actions)](https://packagephobia.now.sh/result?p=discord-actions)

[![NPM](https://nodei.co/npm/discord-actions.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/discord-actions/)

## Installation

```
npm i -s discord-actions
```

Very small install size with no external dependencies.

> Please note that this package has NSFW functions.

### SFW User Action GIFs

| Function                       | Request Results          |
| ------------------------------ | ------------------------ |
| `ActionsClient.sfw.bite()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.bonk()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.bully()`    | `{ "url": "image url" }` |
| `ActionsClient.sfw.feed()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.cuddle()`   | `{ "url": "image url" }` |
| `ActionsClient.sfw.glomp()`    | `{ "url": "image url" }` |
| `ActionsClient.sfw.highfive()` | `{ "url": "image url" }` |
| `ActionsClient.sfw.holdhand()` | `{ "url": "image url" }` |
| `ActionsClient.sfw.hug()`      | `{ "url": "image url" }` |
| `ActionsClient.sfw.kick()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.kill()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.kiss()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.lick()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.pat()`      | `{ "url": "image url" }` |
| `ActionsClient.sfw.poke()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.slap()`     | `{ "url": "image url" }` |
| `ActionsClient.sfw.tickle()`   | `{ "url": "image url" }` |
| `ActionsClient.sfw.yeet()`     | `{ "url": "image url" }` |

### SFW Action GIFs

| Function                       | Request Results                                       |
| ------------------------------ | ----------------------------------------------------- |
| `ActionsClient.sfw.blush()`    | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.confused()` | `{ "reaction": "image url", "category": "confused" }` |
| `ActionsClient.sfw.cook()`     | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.cringe()`   | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.cry()`      | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.dance()`    | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.draw()`     | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.happy()`    | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.nom()`      | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.playing()`  | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.run()`      | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.sad()`      | `{ "reaction": "image url", "category": "sad" }`      |
| `ActionsClient.sfw.sip()`      | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.smile()`    | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.smug()`     | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.think()`    | `{ "reaction": "image url", "category": "think" }`    |
| `ActionsClient.sfw.wave()`     | `{ "url": "some url" }`                               |
| `ActionsClient.sfw.working()`  | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.wink()`     | `{ "url": "image url" }`                              |
| `ActionsClient.sfw.yes()`      | `{ "reaction": "image url", "category": "yes" }`      |

### SFW Useful & Other GIFs

| Function                                     | Request Results                                                                                                        |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `ActionsClient.sfw.meow()`                   | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.woof()`                   | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.goose()`                  | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.why()`                    | `{ "why": "text" }`                                                                                                    |
| `ActionsClient.sfw.cat()`                    | `{ "cat": "unicode cat" }`                                                                                             |
| `ActionsClient.sfw.owoify({ text: 'msg' })`  | `{ "owo": "owoified text" }`                                                                                           |
| `ActionsClient.sfw.eightball()`              | `{ "response": "text", "url": "image url" }`                                                                           |
| `ActionsClient.sfw.fact()`                   | `{ "fact": "text" }`                                                                                                   |
| `ActionsClient.sfw.spoiler({ text: 'msg' })` | `{ "owo": "spoiler text" }`                                                                     |
| `ActionsClient.sfw.gecg()`                   | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.avatar()`                 | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.catboy()`                 | `{ "url": "image url", "artist": "artist name", "artist_url": "artist url", "source_url": "source url", "error": "" }` |
| `ActionsClient.sfw.foxgirl()`                | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.wallpaper()`              | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.awoo()`                   | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.megumin()`                | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.shinobu()`                | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.neko()`                   | `{ "url": "image url" }`                                                                                               |
| `ActionsClient.sfw.waifu()`                  | `{ "url": "image url" }`                                                                                               |

As of now, `owoify`, `eightball` and `spoiler` are the only ones with query parameters. It requires an object containing the parameter, and the key should be the value. In this case, the key is `text` and the value is whatever you want owoified. There is an example in this README.
`{text: 'Some text you want weebified.}`

### NSFW GIFs

| Function                          | Request Results                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------- |
| `ActionsClient.nsfw.ass()`        | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.blowjob()`    | `{ "url": "image url" }`                                                              |
| `ActionsClient.nsfw.boobs()`      | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.feet()`       | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.food()`       | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.hentai()`     | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.fourk()` (4k) | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.lewdneko()`   | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.neko()`       | `{ "url": "image url" }`                                                              |
| `ActionsClient.nsfw.pussy()`      | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.tentacle()`   | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.thigh()`      | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.trap()`       | `{ "url": "image url" }`                                                              |
| `ActionsClient.nsfw.waifu()`      | `{ "url": "image url" }`                                                              |
| `ActionsClient.nsfw.yaoi()`       | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |
| `ActionsClient.nsfw.yuri()`       | `{ "success": "true" "message": "image url", "color": "#ffffff", "version": "1111" }` |

## Typings

I added a typings file and will be working to improve it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.

## Examples

Await/Async Example

```js
const ActionsClient = require('discord-actions');
const client = new ActionsClient();

async function test() {
  console.log(await client.sfw.hug());
}

test();
```

Returns:

```js
{
  url: 'image url';
}
```

Promise Example

```js
const ActionsClient = require('discord-actions');
const client = new ActionsClient();

client.sfw.cat().then((catText) => console.log(catText));
```

Returns:

```js
{
  cat: '((≡^⚲͜^≡))';
}
```

owoify Example

```js
const ActionsClient = require('discord-actions');
const client = new ActionsClient();

async function work() {
  let owo = await client.sfw.owoify({ text: 'This lib is really awesome!' });
  console.log(owo);
}

work();
```

Returns

```js
{
  owo: 'This wib is weawwy awesome >w< ';
}
```

### Discord.JS Bot Example

```js
require('dotenv/config');
const { Client, EmbedBuilder } = require('discord.js');
const ActionsClient = require('discord-actions');
const client = new Client({ intents: [] });
const actions = new ActionsClient();

// To use in other files where you have access to client:
// client.actions = new ActionsClient();
// Example:
// (await client.actions.sfw.hug()).url
// Would give you a hug gif

client.on('messageCreate', async (message) => {
  const prefix = '!';
  const args = message.content.split(' ');

  if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

  switch (args[0]) {
    case 'hug':
      {
        if (!message.mentions.users.first()) return message.reply('You did not provide a user!');
        message.reply({
          embeds: [new EmbedBuilder().setImage((await actions.sfw.hug()).url).setDescription(`${message.author} hugs ${message.mentions.users.first()}`)],
        });
      }
      break;
    case 'blush':
      {
        message.reply({
          embeds: [new EmbedBuilder().setImage((await actions.sfw.blush()).url).setDescription(`${message.author} blushes`)],
        });
      }
      break;
    case 'owoify':
      {
        const userInput = args.join(' ');
        const text = await actions.sfw.owoify({ text: userInput });
        message.reply(`OwOified Text:\n${text.owo}`);
      }
      break;
  }
});

client.login(process.env.TOKEN);
```
