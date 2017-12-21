import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-panel-overlay')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7PanelOverlay {
    
    constructor() {
    }

    get classes(): string {
        var output = 'panel-overlay';
        return output;
    }
}
