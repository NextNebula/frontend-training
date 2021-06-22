import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
    tag: 'episode-player',
})
export class EpisodePlayer {
    @State() audio: HTMLAudioElement;
    @State() isPlaying = false;
    @Prop({ attribute: 'episode' }) episode: any;
  
    @Watch('episode')
    audioHandler() {
        this.audio.load();
        this.audio = null;
        this.isPlaying = false;
    }

    onClickPlayPauseHandler(media) {
        if (this.audio) {
            if (!this.audio.paused) {
                this.audio.pause();
                this.isPlaying = false;
                
            }
            else {
                this.audio.play();
                this.isPlaying = true;
            }
        }
        else {
            this.audio = new Audio(media);
            this.audio.play();
            this.isPlaying = true;
        }
    }

    render() {
        return (
            this.episode && 
            <div class="flex">
                <div onClick={() => this.onClickPlayPauseHandler(this.episode.media)} class="inline-block mr-1 cursor-pointer">
                    {!this.isPlaying && <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>}
                    {this.isPlaying && <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>}
                </div>
                <span class="self-center">{this.episode.title}</span>
            </div>
        )
    }
}