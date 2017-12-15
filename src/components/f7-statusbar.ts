import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-statusbar')
@inlineView(`
<template>
<div class="statusbar-overlay">
    <slot></slot>
</div>
</template>
`)
export class F7StatusBar {
    
    constructor() {
    }
}
