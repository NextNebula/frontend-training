import { Component, h, State } from '@stencil/core';
import { getSubscriptions } from '../../services/getServices';

@Component({
  tag: 'app-home'
})
export class AppHome {
  @State() results = [];

  async componentWillLoad() {
    const podcastResults = await getSubscriptions();
    this.results = podcastResults;
  }

  render() {
    return (
      <item-grid items={this.results}></item-grid>
    );
  }
}
