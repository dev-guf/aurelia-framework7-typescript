import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-block-title')
@inlineView(`
<template>
<div class="\${classes}" css="\${style}">
    <slot></slot>
</div>
</template>
`)
export class F7BlockTitle {
    @bindable style: string = '';

    constructor() {
    }

    get classes(): string{
        var output = 'content-block-title';
        return output;
    }

}
