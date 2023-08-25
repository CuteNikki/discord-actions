[![npm](https://img.shields.io/npm/v/discord-actions.svg)](https://www.npmjs.com/package/discord-actions)
[![npm](https://img.shields.io/npm/dt/discord-actions.svg?maxAge=3600)](https://www.npmjs.com/package/discord-actions)
[![install size](https://packagephobia.now.sh/badge?p=discord-actions)](https://packagephobia.now.sh/result?p=discord-actions)

[![NPM](https://nodei.co/npm/discord-actions.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/discord-actions/)

<br></br>

# 🛈 What's new?

> You no longer need to initialize a client! Functions can be directly imported from the package.

```js
// Before:
const ActionsClient = require('discord-actions');
const actionClient = new ActionsClient();

actionClient.sfw.hug();

// After:
const { hug } = require('discord-actions');

hug();
```

<br></br>

# Discord-Actions

Basically an API wrapper for various APIs. It fetches image urls, can weebify your text and much more.

This package is <b>very small in install size</b> and has <b>no external dependencies</b>.

> Please note that this package has NSFW functions.

This package fetches from the following APIs:

- `waifu.pics`
- `nekos.life`
- `catboys.com`
- `nekobot.xyz`
- `anime-reactions.uzairashraf.dev`
- `nekoapi.vanillank2006.repl.co`

## Installation

```
npm i -s discord-actions
```

## Typings

I added a typings file and will be working to improve it. This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls.

## Interaction GIFs

| Function     | Request Results        | Description                                     |
| ------------ | ---------------------- | ----------------------------------------------- |
| `bite()`     | `{ "url": "gif url" }` | anime gif of person1 biting person2             |
| `bonk()`     | `{ "url": "gif url" }` | anime gif of person1 bonking person2            |
| `bully()`    | `{ "url": "gif url" }` | anime gif of person1 bullying person2           |
| `feed()`     | `{ "url": "gif url" }` | anime gif of person1 feeding person2            |
| `cuddle()`   | `{ "url": "gif url" }` | anime gif of person1 cuddling person2           |
| `tackle()`   | `{ "url": "gif url" }` | anime gif of person1 tackling person2           |
| `highfive()` | `{ "url": "gif url" }` | anime gif of person1 giving highfigh to person2 |
| `holdhand()` | `{ "url": "gif url" }` | anime gif of person1 holding hands with person2 |
| `hug()`      | `{ "url": "gif url" }` | anime gif of person1 hugging person2            |
| `kick()`     | `{ "url": "gif url" }` | anime gif of person1 kicking person2            |
| `kill()`     | `{ "url": "gif url" }` | anime gif of person1 killing person2            |
| `kiss()`     | `{ "url": "gif url" }` | anime gif of person1 kissing person2            |
| `lick()`     | `{ "url": "gif url" }` | anime gif of person1 licking person2            |
| `pat()`      | `{ "url": "gif url" }` | anime gif of person1 patting person2            |
| `poke()`     | `{ "url": "gif url" }` | anime gif of person1 poking person2             |
| `slap()`     | `{ "url": "gif url" }` | anime gif of person1 slapping person2           |
| `tickle()`   | `{ "url": "gif url" }` | anime gif of person1 tickling person2           |
| `yeet()`     | `{ "url": "gif url" }` | anime gif of person1 yeeting person2            |

## Action GIFs

| Function     | Request Results                                     | Description                        |
| ------------ | --------------------------------------------------- | ---------------------------------- |
| `blush()`    | `{ "url": "gif url" }`                              | anime gif of person blushing       |
| `confused()` | `{ "reaction": "gif url", "category": "confused" }` | anime gif of person being confused |
| `cook()`     | `{ "url": "gif url" }`                              | anime gif of person cooking        |
| `cringe()`   | `{ "url": "gif url" }`                              | anime gif of person cringing       |
| `cry()`      | `{ "url": "gif url" }`                              | anime gif of person crying         |
| `dance()`    | `{ "url": "gif url" }`                              | anime gif of person dancing        |
| `draw()`     | `{ "url": "gif url" }`                              | anime gif of person drawing        |
| `happy()`    | `{ "url": "gif url" }`                              | anime gif of person being happy    |
| `nom()`      | `{ "url": "gif url" }`                              | anime gif of person eating         |
| `playing()`  | `{ "url": "gif url" }`                              | anime gif of person playing        |
| `run()`      | `{ "url": "gif url" }`                              | anime gif of person running        |
| `sad()`      | `{ "reaction": "gif url", "category": "sad" }`      | anime gif of person being sad      |
| `sip()`      | `{ "url": "gif url" }`                              | anime gif of person sipping        |
| `smile()`    | `{ "url": "gif url" }`                              | anime gif of person smiling        |
| `smug()`     | `{ "url": "gif url" }`                              | anime gif of person smugging       |
| `think()`    | `{ "reaction": "gif url", "category": "think" }`    | anime gif of person thinking       |
| `wave()`     | `{ "url": "gif url" }`                              | anime gif of person waving         |
| `working()`  | `{ "url": "gif url" }`                              | anime gif of person working        |
| `wink()`     | `{ "url": "gif url" }`                              | anime gif of person winking        |
| `yes()`      | `{ "reaction": "gif url", "category": "yes" }`      | anime gif of person agreeing       |

## Fun & Useful Actions

| Function                   | Request Results                                                                                                        | Description                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `meow()`                   | `{ "url": "image url" }`                                                                                               | random cat image                |
| `woof()`                   | `{ "url": "image url" }`                                                                                               | random dog image                |
| `goose()`                  | `{ "url": "image url" }`                                                                                               | random goose image              |
| `why()`                    | `{ "why": "text" }`                                                                                                    | random question                 |
| `cat()`                    | `{ "cat": "unicode cat" }`                                                                                             | random unicode cat              |
| `owoify({ text: 'msg' })`  | `{ "owo": "owoified text" }`                                                                                           | weebifies your text             |
| `eightball()`              | `{ "response": "text", "url": "image url" }`                                                                           | randomly answers your question  |
| `fact()`                   | `{ "fact": "text" }`                                                                                                   | random fact                     |
| `spoiler({ text: 'msg' })` | `{ "owo": "spoiler text" }`                                                                                            | spoilers your text              |
| `gecg()`                   | `{ "url": "image url" }`                                                                                               | genetically                     |
| `avatar()`                 | `{ "url": "image url" }`                                                                                               | genetically engineered catgirls |
| `catboy()`                 | `{ "url": "image url", "artist": "artist name", "artist_url": "artist url", "source_url": "source url", "error": "" }` | random catboy                   |
| `foxgirl()`                | `{ "url": "image url" }`                                                                                               | random foxgirl                  |
| `wallpaper()`              | `{ "url": "image url" }`                                                                                               | random wallpaper                |
| `awoo()`                   | `{ "url": "image url" }`                                                                                               | random fox/cat girl/boy         |
| `megumin()`                | `{ "url": "image url" }`                                                                                               | random megumin                  |
| `shinobu()`                | `{ "url": "image url" }`                                                                                               | random shinobu                  |
| `neko()`                   | `{ "url": "image url" }`                                                                                               | random neko                     |
| `waifu()`                  | `{ "url": "image url" }`                                                                                               | random waifu                    |

As of now, `owoify`, `eightball` and `spoiler` are the only ones with query parameters. It requires an object containing the parameter, and the key should be the value. In this case, the key is `text` and the value is whatever you want for example to be owoified. There is an example below and another one somewhere else in this README.

`{ text: 'This lib is really awesome!' }`

## NSFW GIFs/Images

| Function            | Request Results                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `nsfw_ass()`        | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_blowjob()`    | `{ "url": "gif/image url" }`                                                              |
| `nsfw_boobs()`      | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_feet()`       | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_food()`       | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_hentai()`     | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_fourk()` (4k) | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_lewdneko()`   | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_neko()`       | `{ "url": "gif/image url" }`                                                              |
| `nsfw_pussy()`      | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_tentacle()`   | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_thigh()`      | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_trap()`       | `{ "url": "gif/image url" }`                                                              |
| `nsfw_waifu()`      | `{ "url": "gif/image url" }`                                                              |
| `nsfw_yaoi()`       | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |
| `nsfw_yuri()`       | `{ "success": "true" "message": "gif/image url", "color": "#ffffff", "version": "1111" }` |

## Examples

Await/Async Example

```js
const { hug } = require('discord-actions');

async function test() {
  const hug = await hug();
  console.log(hug); // { url: 'image url' }

  // The result can directly be deconstructed like this:

  const { url } = await hug();
  console.log(url); // 'image url'
}
test();
```

Promise Example

```js
const { cat } = require('discord-actions');

cat().then((catText) => console.log(catText)); // { cat: '((≡^⚲͜^≡))' }

// The result can directly be deconstructed like this:

cat().then(({ cat }) => console.log(cat)); // '((≡^⚲͜^≡))'
```

owoify Example

```js
const { owoify } = require('discord-actions');

async function work() {
  const owoified = await owoify({ text: 'This lib is really awesome!' });
  console.log(owoified); // { owo: 'This wib is weawwy awesome >w<' }

  // The result can directly be deconstructed like this:

  const { owo } = await owoify({ text: 'This lib is really awesome!' });
  console.log(owo); // 'This wib is weawwy awesome >w<'
}
work();
```

### Discord.JS Bot Example

```js
const { Client, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [] });

const { hug, blush, owoify } = require('discord-actions');

client.on('messageCreate', async (message) => {
  const prefix = '!';
  const args = message.content.split(' ');

  if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

  switch (args[0]) {
    case 'hug':
      {
        if (!message.mentions.users.first()) return message.reply('You did not provide a user!');
        message.reply({
          embeds: [new EmbedBuilder().setImage((await hug()).url).setDescription(`${message.author} hugs ${message.mentions.users.first()}`)],
        });
      }
      break;
    case 'blush':
      {
        message.reply({
          embeds: [new EmbedBuilder().setImage((await blush()).url).setDescription(`${message.author} blushes`)],
        });
      }
      break;
    case 'owoify':
      {
        const userInput = args.join(' ');
        const text = await owoify({ text: userInput });
        message.reply(`OwOified Text:\n${text.owo}`);
      }
      break;
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN'); // This needs to be replaced with an actual bot token!!
```
