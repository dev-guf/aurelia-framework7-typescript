import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-panel-overlay')
@inlineView(`
<template>
<div class="panel-overlay">
    <slot></slot>
</div>
</template>
`)
export class F7PanelOverlay {
    
    constructor() {
    }
}
