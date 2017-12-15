import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-panel-right')
@inlineView(`
<template>
<div class="panel panel-right panel-reveal">
    <slot></slot>
</div>
</template>
`)
export class F7PanelRight {
    
    constructor() {
    }
}
