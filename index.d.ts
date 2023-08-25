export declare function bite(): Promise<RequestResults>;
export declare function bonk(): Promise<RequestResults>;
export declare function bully(): Promise<RequestResults>;
export declare function feed(): Promise<RequestResults>;
export declare function cuddle(): Promise<RequestResults>;
export declare function tackle(): Promise<RequestResults>;
export declare function highfive(): Promise<RequestResults>;
export declare function holdhand(): Promise<RequestResults>;
export declare function hug(): Promise<RequestResults>;
export declare function kick(): Promise<RequestResults>;
export declare function kill(): Promise<RequestResults>;
export declare function kiss(): Promise<RequestResults>;
export declare function lick(): Promise<RequestResults>;
export declare function pat(): Promise<RequestResults>;
export declare function poke(): Promise<RequestResults>;
export declare function slap(): Promise<RequestResults>;
export declare function tickle(): Promise<RequestResults>;
export declare function yeet(): Promise<RequestResults>;

export declare function blush(): Promise<RequestResults>;
export declare function confused(): Promise<AnimereactionsRequestResults>;
export declare function cook(): Promise<RequestResults>;
export declare function cringe(): Promise<RequestResults>;
export declare function cry(): Promise<RequestResults>;
export declare function dance(): Promise<RequestResults>;
export declare function draw(): Promise<RequestResults>;
export declare function happy(): Promise<RequestResults>;
export declare function nom(): Promise<RequestResults>;
export declare function playing(): Promise<RequestResults>;
export declare function run(): Promise<RequestResults>;
export declare function sad(): Promise<AnimereactionsRequestResults>;
export declare function sip(): Promise<RequestResults>;
export declare function smile(): Promise<RequestResults>;
export declare function smug(): Promise<RequestResults>;
export declare function think(): Promise<AnimereactionsRequestResults>;
export declare function wave(): Promise<RequestResults>;
export declare function working(): Promise<RequestResults>;
export declare function wink(): Promise<RequestResults>;
export declare function yes(): Promise<AnimereactionsRequestResults>;

export declare function meow(): Promise<RequestResults>;
export declare function woof(): Promise<RequestResults>;
export declare function goose(): Promise<RequestResults>;
export declare function why(): Promise<WhyRequestResults>;
export declare function cat(): Promise<CatRequestResults>;
export declare function owoify(options: RequestTextInput): Promise<OwoifyRequestResults>;
export declare function eightball(options: RequestTextInput): Promise<EightballRequestResults>;
export declare function fact(): Promise<FactRequestResults>;
export declare function spoiler(options: RequestTextInput): Promise<OwoifyRequestResults>;
export declare function gecg(): Promise<RequestResults>;
export declare function avatar(): Promise<RequestResults>;

export declare function catboy(): Promise<CatboyRequestResults>;
export declare function foxgirl(): Promise<RequestResults>;
export declare function wallpaper(): Promise<RequestResults>;
export declare function awoo(): Promise<RequestResults>;
export declare function megumin(): Promise<RequestResults>;
export declare function shinobu(): Promise<RequestResults>;
export declare function neko(): Promise<RequestResults>;
export declare function waifu(): Promise<RequestResults>;

export declare function nsfw_ass(): Promise<NekobotRequestResult>;
export declare function nsfw_blowjob(): Promise<RequestResults>;
export declare function nsfw_boobs(): Promise<NekobotRequestResult>;
export declare function nsfw_feet(): Promise<NekobotRequestResult>;
export declare function nsfw_food(): Promise<NekobotRequestResult>;
export declare function nsfw_hentai(): Promise<NekobotRequestResult>;
export declare function nsfw_fourk(): Promise<NekobotRequestResult>;
export declare function nsfw_lewdneko(): Promise<NekobotRequestResult>;
export declare function nsfw_neko(): Promise<RequestResults>;
export declare function nsfw_pussy(): Promise<NekobotRequestResult>;
export declare function nsfw_tentacle(): Promise<NekobotRequestResult>;
export declare function nsfw_thigh(): Promise<NekobotRequestResult>;
export declare function nsfw_trap(): Promise<RequestResults>;
export declare function nsfw_waifu(): Promise<RequestResults>;
export declare function nsfw_yaoi(): Promise<NekobotRequestResult>;
export declare function nsfw_yuri(): Promise<NekobotRequestResult>;

interface RequestResults {
  url: string;
}
interface WhyRequestResults {
  why: string;
}
interface CatRequestResults {
  cat: string;
}
interface OwoifyRequestResults {
  owo: string;
}
interface EightballRequestResults {
  response: string;
  url: string;
}
interface FactRequestResults {
  fact: string;
}
interface CatboyRequestResults {
  url: string;
  artist?: string;
  artist_url?: string;
  source_url?: string;
  error?: string;
}
interface NekobotRequestResult {
  success: string;
  message: string;
  color: string | number;
  version: string;
}
interface AnimereactionsRequestResults {
  reaction: string;
  category: string;
}
interface RequestTextInput {
  text: string;
}

export {
  RequestResults,
  WhyRequestResults,
  CatRequestResults,
  OwoifyRequestResults,
  EightballRequestResults,
  FactRequestResults,
  CatboyRequestResults,
  NekobotRequestResult,
  AnimereactionsRequestResults,
  RequestTextInput,
};
