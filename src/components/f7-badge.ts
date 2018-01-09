import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-badge')
@inlineView(`
<template>
<span class="\${classes}" style="\${style}">
    <slot></slot>
</span>
</template>
`)
export class F7Badge {
    @bindable style: string = '';
    @bindable color: string = '';

    constructor() {
    }

    get classes(): string{
        var output = 'badge';
        if (this.color !== '') {
            output += " color-" + this.color;
        }
        return output;
    }

}
