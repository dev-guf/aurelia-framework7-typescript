import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-grid')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7Grid {
    @bindable noGutter: boolean = false;
    constructor() {
     }

     get classes(): string{
        var output = 'row';
        if (this.noGutter !== false) {
            output += 'no-gutter';
        }
        return output;
    }
}
