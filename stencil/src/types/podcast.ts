export interface PodcastResult {
  id: number;
  name: string;
  image: string;
}

export interface PodcastDetails {
  id: number;
  name: string;
  image: string;
  description: string;
  isSubscribed: boolean;
  episodes: EpisodeDetails[]
}

export interface EpisodeDetails {
  title: string;
  media: string;
}

export interface EpisodePlay {
  podcast: PodcastDetails;
  episode: EpisodeDetails;
}