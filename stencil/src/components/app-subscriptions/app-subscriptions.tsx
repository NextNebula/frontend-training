import { Component, h, State } from '@stencil/core';
import { getSubscriptions } from '../../services/getServices';
import { PodcastResult } from '../../types/podcast';

@Component({
  tag: 'app-subscriptions'
})
export class AppSubscriptions {
  @State() results:PodcastResult[] = [];

  async componentWillLoad() {
    const podcastResults = await getSubscriptions();
    this.results = podcastResults;
  }

  render() {
    return (
      <div>
        <h1 class="mb-2">Subscriptions</h1>
        <item-grid items={this.results}></item-grid>
      </div>
    );
  }
}
