import { Component, h, State } from '@stencil/core';
import { getSearchResults } from '../../services/getServices';
import debounce from 'lodash/debounce';
import { PodcastResult } from '../../types/podcast';

@Component({
  tag: 'app-search',
})
export class AppSearch {
  @State() results: PodcastResult[] = [];

  private performSearch = debounce(async (e: Event) => {
    const query = (e.target as HTMLInputElement).value;
    if (query) {
      var searchResults = await getSearchResults(query);
      this.results = searchResults;
    }
    else {
      this.results = [];
    }
  }, 500);

  render() {
    return (
      <div class="app-search">
        <h1 class="mb-2">Search</h1>
        <input
          class="w-6/12 px-2 py-1 mb-2 border border-gray-300 bg-gray-100 rounded-md outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
          onInput={this.performSearch}
          autoComplete="off"
        />
        <item-grid items={this.results}></item-grid>
      </div>
    );
  }
}
