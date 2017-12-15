import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-nav-left')
@inlineView(`
<template>
    <div class="left">        
        <slot></slot>
    </div>
</template>
`)
export class F7NavLeft {

    constructor() {
    }
}
