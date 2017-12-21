import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-nav-left')
@inlineView(`
<template>
    <div class="\${classes}">        
        <slot></slot>
    </div>
</template>
`)
export class F7NavLeft {

    constructor() {
    }

    get classes(): string {
        var output = 'left';
        return output;
    }
}
