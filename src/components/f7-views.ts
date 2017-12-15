import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-views')
@inlineView(`
<template>
<div class="views">
    <slot></slot>
</div>
</template>
`)
export class F7Views {
    
    constructor() {
    }
}
