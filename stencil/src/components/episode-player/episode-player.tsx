import { Component, h, Prop, State, Watch } from '@stencil/core';
import { EpisodePlay } from '../../types/podcast';

@Component({
    tag: 'episode-player',
})
export class EpisodePlayer {
    @State() audio = new Audio();
    @State() isPlaying = false;
    @Prop() episodePlay: EpisodePlay;
  
    @Watch('episodePlay')
    audioEpisodeHandler(newEpisode: EpisodePlay) {
        this.isPlaying = false;
        this.audio.setAttribute('src', newEpisode.episode.media);
        this.audio.load();
    }

    private onClickPlayPauseHandler = () => {
        if (!this.audio)
            return;

        if (!this.audio.paused) {
            this.audio.pause();
            this.isPlaying = false;
        }
        else {
            this.audio.play();
            this.isPlaying = true;
        }
    }

    render() {
        return (
            this.episodePlay && 
            <div class="flex cursor-pointer" onClick={this.onClickPlayPauseHandler}>
                <img src={this.episodePlay.podcast.image} alt={this.episodePlay.podcast.name} class="inline-block h-8 w-8 mr-2 rounded-sm shadow"></img>
                <span class="self-center">{this.episodePlay.episode.title}</span>
                <div class="inline-block ml-1">
                    {!this.isPlaying && <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>}
                    {this.isPlaying && <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>}
                </div>
            </div>
        )
    }
}