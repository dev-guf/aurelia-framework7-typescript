import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-label')
@inlineView(`
<template>
    <div class="\${classes}">
        <slot></slot>
    </div>
</template>
`)
export class F7Label {
    
    constructor() {
    }

    get classes(): string {
        var output = 'item-title label';
        return output;
    }
}
