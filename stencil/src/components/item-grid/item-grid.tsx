import { Component, h, Prop } from '@stencil/core';
import { PodcastResult } from '../../types/podcast';

@Component({
    tag: 'item-grid',
})
export class ItemGrid {
    @Prop() items: PodcastResult[];

    render() {
        return(
            <div class="grid grid-cols-4 gap-2">
                {Array.isArray(this.items) && this.items.map((item) =>
                    <stencil-route-link url={`podcast/${item.id}`}>
                        <img src={item.image} class="w-full rounded-md shadow" alt={item.name}></img>
                        <div class="text-center">{item.name}</div>
                    </stencil-route-link>
                )}
            </div>
        )
    }
}