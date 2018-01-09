import { bindable, customElement, containerless, inject } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';

@containerless
@customElement('f7-button')
@inlineView(`
<template>
<a href="\${href}" class="\${classes}" click.trigger="onClick()">
    <slot></slot>
</a>
</template>
`)
@inject(EventAggregator)
export class F7Button {
    @bindable href: string = "#";
    @bindable active: boolean = false;
    @bindable color: string;
    @bindable rippleColor: string;
    @bindable big: boolean = false;
    @bindable round: boolean = false;
    @bindable fill: boolean = false;
    @bindable raised: boolean = false;
    @bindable publish: string = '';

    constructor(private ea: EventAggregator) {
    }

    get classes(): string{
        var output = 'button';
        if (this.active !== false) {
            output += ' active';
        }
        if (this.round !== false) {
            output += ' button-round';
        }
        if (this.big !== false) {
            output += ' button-big';
        }
        if (this.fill !== false) {
            output += ' button-fill';
        }
        if (this.raised !== false) {
            output += ' button-raised';
        }
        if (this.color != undefined) {
            output += ' color-' + this.color;
        }
        if (this.rippleColor != undefined) {
            output += ' ripple-' + this.rippleColor;
        }
        
        return output;
    }

    onClick() {
        this.ea.publish(this.publish);
    }

}
