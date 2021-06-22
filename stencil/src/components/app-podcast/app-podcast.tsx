import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { getPodcastDetails, postSubscribe, postUnsubscribe } from '../../services/getServices';
import { EpisodeDetails, PodcastDetails } from '../../types/podcast';

@Component({
  tag: 'app-podcast'
})
export class AppPodcast {
    @Prop() match: MatchResults;
    @Prop() podcast: PodcastDetails;
    @Event() playEpisode: EventEmitter<EpisodeDetails>;

    async componentWillLoad() {
        const details = await getPodcastDetails(this.match.params.id);
        this.podcast = details;
    }

    private subscribe = async () => {
        await postSubscribe(this.match.params.id);
        this.podcast = {
            ...this.podcast,
            isSubscribed: true
        };
    }

    private unsubscribe = async () => {
        await postUnsubscribe(this.match.params.id);
        this.podcast = {
            ...this.podcast,
            isSubscribed: false
        };
    }

    private onClickEpisodeHandler = (episode) => {
        this.playEpisode.emit(episode);
    }

    render() {
        return (
            !this.podcast ? null :
            <div>
                <div class="flex items-start mb-4">
                    <img class="w-72 rounded-md shadow mr-2" src={this.podcast.image} alt={this.podcast.name}/>
                    <div class="flex-grow">
                        {!this.podcast.isSubscribed && <button class="button float-right" onClick={this.subscribe}>Subscribe</button>}
                        {this.podcast.isSubscribed && <button class="button float-right" onClick={this.unsubscribe}>Unsubscribe</button>}
                        <h1 class="mb-2">{this.podcast.name}</h1>
                        <div>{this.podcast.description}</div>
                    </div>
                </div>
                {this.podcast.episodes?.map((episode, index) => <div key={index} onClick={() => this.onClickEpisodeHandler(episode)} class="bg-gray-100 mb-2 p-2 rounded-md shadow cursor-pointer">{episode.title}</div>)}
            </div>
    );
  }
}
