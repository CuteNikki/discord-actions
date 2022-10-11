declare class DiscordActionsClient {
  sfw: {
    bite(): Promise<DiscordActionsClient.RequestResults>;
    bonk(): Promise<DiscordActionsClient.RequestResults>;
    bully(): Promise<DiscordActionsClient.RequestResults>;
    feed(): Promise<DiscordActionsClient.RequestResults>;
    cuddle(): Promise<DiscordActionsClient.RequestResults>;
    glomp(): Promise<DiscordActionsClient.RequestResults>;
    highfive(): Promise<DiscordActionsClient.RequestResults>;
    holdhand(): Promise<DiscordActionsClient.RequestResults>;
    hug(): Promise<DiscordActionsClient.RequestResults>;
    kick(): Promise<DiscordActionsClient.RequestResults>;
    kill(): Promise<DiscordActionsClient.RequestResults>;
    kiss(): Promise<DiscordActionsClient.RequestResults>;
    lick(): Promise<DiscordActionsClient.RequestResults>;
    pat(): Promise<DiscordActionsClient.RequestResults>;
    poke(): Promise<DiscordActionsClient.RequestResults>;
    slap(): Promise<DiscordActionsClient.RequestResults>;
    tickle(): Promise<DiscordActionsClient.RequestResults>;
    yeet(): Promise<DiscordActionsClient.RequestResults>;

    blush(): Promise<DiscordActionsClient.RequestResults>;
    confused(): Promise<DiscordActionsClient.AnimereactionsRequestResult>;
    cook(): Promise<DiscordActionsClient.RequestResults>;
    cringe(): Promise<DiscordActionsClient.RequestResults>;
    cry(): Promise<DiscordActionsClient.RequestResults>;
    dance(): Promise<DiscordActionsClient.RequestResults>;
    draw(): Promise<DiscordActionsClient.RequestResults>;
    happy(): Promise<DiscordActionsClient.RequestResults>;
    nom(): Promise<DiscordActionsClient.RequestResults>;
    playing(): Promise<DiscordActionsClient.RequestResults>;
    run(): Promise<DiscordActionsClient.RequestResults>;
    sad(): Promise<DiscordActionsClient.AnimereactionsRequestResult>;
    sip(): Promise<DiscordActionsClient.RequestResults>;
    smile(): Promise<DiscordActionsClient.RequestResults>;
    smug(): Promise<DiscordActionsClient.RequestResults>;
    think(): Promise<DiscordActionsClient.AnimereactionsRequestResult>;
    wave(): Promise<DiscordActionsClient.RequestResults>;
    working(): Promise<DiscordActionsClient.RequestResults>;
    wink(): Promise<DiscordActionsClient.RequestResults>;
    yes(): Promise<DiscordActionsClient.AnimereactionsRequestResult>;

    meow(): Promise<DiscordActionsClient.RequestResults>;
    woof(): Promise<DiscordActionsClient.RequestResults>;
    goose(): Promise<DiscordActionsClient.RequestResults>;
    why(): Promise<DiscordActionsClient.WhyRequestResults>;
    cat(): Promise<DiscordActionsClient.CatRequestResults>;
    owoify(options: DiscordActionsClient.RequestTextInput): Promise<DiscordActionsClient.OwoifyRequestResults>;
    eightball(options: DiscordActionsClient.RequestTextInput): Promise<DiscordActionsClient.EightballRequestResults>;
    fact(): Promise<DiscordActionsClient.FactRequestResults>;
    spoiler(options: DiscordActionsClient.RequestTextInput): Promise<DiscordActionsClient.OwoifyRequestResults>;
    gecg(): Promise<DiscordActionsClient.RequestResults>;
    avatar(): Promise<DiscordActionsClient.RequestResults>;

    catboy(): Promise<DiscordActionsClient.CatboyRequestResults>;
    foxgirl(): Promise<DiscordActionsClient.RequestResults>;
    wallpaper(): Promise<DiscordActionsClient.RequestResults>;
    awoo(): Promise<DiscordActionsClient.RequestResults>;
    megumin(): Promise<DiscordActionsClient.RequestResults>;
    shinonu(): Promise<DiscordActionsClient.RequestResults>;
    neko(): Promise<DiscordActionsClient.RequestResults>;
    waifu(): Promise<DiscordActionsClient.RequestResults>;
  };
  nsfw: {
    ass(): Promise<DiscordActionsClient.NekobotRequestResult>;
    blowjob(): Promise<DiscordActionsClient.RequestResults>;
    boobs(): Promise<DiscordActionsClient.NekobotRequestResult>;
    feet(): Promise<DiscordActionsClient.NekobotRequestResult>;
    food(): Promise<DiscordActionsClient.NekobotRequestResult>;
    hentai(): Promise<DiscordActionsClient.NekobotRequestResult>;
    fourk(): Promise<DiscordActionsClient.NekobotRequestResult>;
    lewdneko(): Promise<DiscordActionsClient.NekobotRequestResult>;
    neko(): Promise<DiscordActionsClient.RequestResults>;
    pussy(): Promise<DiscordActionsClient.NekobotRequestResult>;
    tentacle(): Promise<DiscordActionsClient.NekobotRequestResult>;
    thigh(): Promise<DiscordActionsClient.NekobotRequestResult>;
    trap(): Promise<DiscordActionsClient.RequestResults>;
    waifu(): Promise<DiscordActionsClient.RequestResults>;
    yaoi(): Promise<DiscordActionsClient.NekobotRequestResult>;
    yuri(): Promise<DiscordActionsClient.NekobotRequestResult>;
  };
}

export = DiscordActionsClient;

declare namespace DiscordActionsClient {
  export interface RequestResults {
    url: string;
  }
  export interface WhyRequestResults {
    why: string;
  }
  export interface CatRequestResults {
    cat: string;
  }
  export interface OwoifyRequestResults {
    owo: string;
  }
  export interface EightballRequestResults {
    response: string;
    url: string;
  }
  export interface FactRequestResults {
    fact: string;
  }
  export interface CatboyRequestResults {
    url: string;
    artist?: string;
    artist_url?: string;
    source_url?: string;
    error?: string;
  }
  export interface NekobotRequestResult {
    success: string;
    message: string;
    color: string | number;
    version: string;
  }
  export interface AnimereactionsRequestResult {
    reaction: string;
    category: string;
  }
  export interface RequestTextInput {
    text: string;
  }
}
