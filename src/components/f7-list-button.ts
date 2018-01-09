import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-list-button')
@inlineView(`
<template>
<li>
    <a href="#" class="\${classes}">
        <slot></slot>
    </a>
</li>
</template>
`)
export class F7ListButton {
    @bindable color: string;

    constructor() {
    }

    get classes(): string {
        var output = 'item-link list-button';
        if (this.color != undefined) {
            output += 'button-' + this.color;
        }
        return output;
    }
}
