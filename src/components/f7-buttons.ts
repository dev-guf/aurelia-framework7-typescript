import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-buttons')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7Buttons {
    @bindable href: string = "#";
    @bindable theme: string;

    constructor() {
    }

    get classes(): string{
        var output = 'buttons-row';
        if (this.theme != undefined) {
            output += ' theme-' + this.theme;
        }
        return output;
    }

}
