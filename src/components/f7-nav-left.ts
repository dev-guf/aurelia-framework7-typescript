import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-nav-left')
@inlineView(`
<template>
<div class="left">        
    <a if.bind="backLink" href="#" class="back link icon-only">
        <i class="icon icon-back"></i>
    </a>
    <slot>
    </slot>
</div>
</template>
`)
export class F7NavLeft {
    @bindable 
    backLink: boolean = false;

    constructor(
       
    ) {

    }
}