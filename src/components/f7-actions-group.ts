import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-actions-group')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7ActionsGroup {

    constructor() {
    }

    get classes(): string{
        var output = 'actions-modal-group';
        return output;
    }

}
