import { Component, h, Listen, State } from '@stencil/core';
import { EpisodeDetails } from '../../types/podcast';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  @State() episode: EpisodeDetails;

  //Has to be at root component because of event bubbling
  @Listen('playEpisode')
  playEpisodeHandler(event: CustomEvent<EpisodeDetails>) {
      this.episode = event.detail;
  }

  render() {
    return (
      <div>
        <header class="mb-4 bg-blue-500">
          <div class="container mx-auto flex pr-2">
            <nav class="flex-grow">
              <ul class="flex">
                <li>
                  <stencil-route-link url="/" exact={true} class="nav-link">Home</stencil-route-link>
                </li>
                <li>
                  <stencil-route-link url="/search" class="nav-link">Search</stencil-route-link>
                </li>
              </ul>
            </nav>
            <div class="self-center text-white">
              <episode-player episode={this.episode}></episode-player>
            </div>
          </div>
        </header>
        <main class="container mx-auto px-2">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-subscriptions" exact={true} />
              <stencil-route url="/search" component="app-search" />
              <stencil-route url="/podcast/:id" component="app-podcast" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
