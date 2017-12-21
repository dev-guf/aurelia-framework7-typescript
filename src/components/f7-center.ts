import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-center')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7Center {

    constructor() {
     }

     get classes(): string{
        var output = 'center';
        return output;
    }
}
