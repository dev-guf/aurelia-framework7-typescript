import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-col')
@inlineView(`
<template>
    <div class="\${classes}">
        <slot></slot>
    </div>
</template>
`)
export class F7Col {
    @bindable width: number;
    @bindable tabletWidth: number;

    constructor() {
     }

     get classes(): string{
        var output = 'col-';
        if (this.width == undefined) {
            output += 'auto';
        } else {
            output += this.width;
        }
        if (this.tabletWidth != undefined) {
            output += 'tablet-' + this.tabletWidth;
        }
        return output;
    }
}
