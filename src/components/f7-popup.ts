import { bindable, customElement, containerless, inject } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';

@containerless
@customElement('f7-popup')
@inlineView(`
<template>
<div class="\${classes}" css="\${style}" opened="\${opened}">
    <slot></slot>
</div>
</template>
`)
@inject(EventAggregator)
export class F7Popup {
    @bindable style: string = '';
    @bindable name: string = '';
    @bindable opened: boolean = true;

    constructor(private ea: EventAggregator) {
    }

    get classes(): string {
        var output = 'popup';
        if (this.name !== '') {
            output += " " + this.name;
        }
        return output;
    }

    activate() {
        this.ea.subscribe("open-popup", () => {
            alert('Open Popup');
        });
    }
}
