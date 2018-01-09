import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-tabs')
@inlineView(`
<template>
    <div class="\${classes}">
        <slot></slot>
    </div>
</template>
`)
export class F7Tabs {
    
    constructor() {
    }

    get classes(): string {
        var output = 'tabs';
        return output;
    }
}
