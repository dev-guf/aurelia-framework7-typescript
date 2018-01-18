import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-block')
@inlineView(`
<template>
<div class="\${classes}" css="\${style}">
    <slot></slot>
</div>
</template>
`)
export class F7Block {
    @bindable inner: boolean = false;
    @bindable inset: boolean = false;
    @bindable backgroundColor: string = "false";
    @bindable style: string = '';
    @bindable class: string = '';

    constructor() {
    }

    get classes(): string {
        var output = 'content-block';
        if (this.inner !== false) {
            output += ' inner';
        }
        if (this.inset !== false) {
            output += ' inset';
        }
        if (this.backgroundColor !== "false") {
            output += ' theme-' + this.backgroundColor;
        }
        if (this.class !== "false") {
            output +=  ' ' + this.class;
        }
        return output;
    }
}
