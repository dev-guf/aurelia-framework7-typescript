import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-actions-button')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7ActionButton {
    @bindable color: string;
    @bindable bold: boolean = false;

    constructor() {
    }

    get classes(): string{
        var output = 'actions-modal-button';
        if (this.color != undefined) {
            output += ' color-' + this.color;
        }
        if (this.bold !== false) {
            output += ' actions-modal-button-bold';
        }
        return output;
    }

}
