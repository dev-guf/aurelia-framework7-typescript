import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-panel-left')
@inlineView(`
<template>
<div class="panel panel-left panel-reveal">
    <slot></slot>
</div>
</template>
`)
export class F7PanelLeft {
    
    constructor() {
    }
}
