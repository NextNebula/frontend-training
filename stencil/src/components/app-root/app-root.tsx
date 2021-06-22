import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <div>
        <header class="mb-4 bg-blue-500">
        <div class="container mx-auto">
                <nav>
                    <ul class="flex ">
                        <li>
                          <stencil-route-link url="/" exact={true} class="nav-link">Home</stencil-route-link>
                        </li>
                        <li>
                          <stencil-route-link url="/search" class="nav-link">Search</stencil-route-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
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
