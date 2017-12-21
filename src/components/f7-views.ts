import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-views')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7Views {
    
    constructor() {
    }

    get classes(): string {
        var output = 'views';
        return output;
    }
}
