import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'item-grid',
})
export class ItemGrid {
    @Prop() items: any[];

    render() {
        return(
            <div class="grid grid-cols-4 gap-2">
                {Array.isArray(this.items) && this.items.map((result) =>
                    <div>
                        <img src={result.image} class="w-full rounded-md shadow" alt={result.name}></img>
                        <div class="text-center">{result.name}</div>
                    </div>
                )}
            </div>
        )
    }
}