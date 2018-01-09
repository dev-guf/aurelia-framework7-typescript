import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-actions-label')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7ActionLabel {

    constructor() {
    }

    get classes(): string{
        var output = 'actions-modal-label';
        return output;
    }

}
