import { Component, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { getPodcastDetails } from '../../services/getServices';

@Component({
  tag: 'app-podcast'
})
export class AppPodcast {
    @Prop() match: MatchResults;
    @Prop() podcast: any;

    async componentWillLoad() {
        const details = await getPodcastDetails(this.match.params.id);
        this.podcast = details;
    }

    render() {
        return (
            !this.podcast ? null :
            <div>
                <div class="flex items-start mb-4">
                    <img class="w-72 rounded-md shadow" src={this.podcast.image} alt={this.podcast.name}/>
                    <div class="mx-2 flex-grow">
                        <h1 class="mb-2">{this.podcast.name}</h1>
                        <div>{this.podcast.description}</div>
                    </div>
                </div>
                {this.podcast.episodes?.map((episode, index) => <div key={index} class="bg-gray-100 mb-2 p-2 rounded-md shadow">{episode.title}</div>)}
            </div>
    );
  }
}
