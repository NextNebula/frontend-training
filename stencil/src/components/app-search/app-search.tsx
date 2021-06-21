import { Component, h, State } from '@stencil/core';
import { getSearchResults } from '../../services/getServices';
import debounce from 'lodash/debounce';

@Component({
  tag: 'app-search',
})
export class AppSearch {
  @State() results = [];

  private performSearch = debounce(async (e: Event) => {
    const query = (e.target as HTMLInputElement).value;
    if (query) {
      var searchResults = await getSearchResults(query);
      this.results = searchResults;
      console.log(this.results);
    }
    else {
      this.results = [];
    }
  }, 300);

  render() {
    return (
      <div class="app-search">
        <h1 class="mb-2">Search</h1>
        <input
          class="w-6/12 px-2 py-1 mb-2 border border-gray-300 bg-gray-100 rounded-md outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
          onInput={this.performSearch}
        />
        {this.results.map((result) =>
          <div>{result.name}</div>
        )}
      </div>
    );
  }
}
