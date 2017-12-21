import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-statusbar')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7StatusBar {
    
    constructor() {
    }

    get classes(): string {
        var output = 'statusbar-overlay';
        return output;
    }
}
