declare class DiscordActionsClient {
  sfw: {
    cuddle(): Promise<DiscordActionsClient.RequestResults>;
  };
  nsfw: {};
}

export = DiscordActionsClient;

declare namespace DiscordActionsClient {
  export interface RequestResults {
    url: string;
  }
}
