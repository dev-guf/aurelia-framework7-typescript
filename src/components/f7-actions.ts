import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-actions')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7Actions {

    constructor() {
    }

    get classes(): string{
        var output = 'actions-modal';
        return output;
    }

}
