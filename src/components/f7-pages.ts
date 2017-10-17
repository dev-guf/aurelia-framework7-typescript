import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-pages')
@inlineView(`
<template>
<div class="pages">
    <slot></slot>
</div>
</template>
`)
export class F7Pages {
    
    constructor(
       
    ) {

    }
}