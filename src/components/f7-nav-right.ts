import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-nav-right')
@inlineView(`
<template>
<named-slot>  
        <div slot="right-slot">
            <slot>
            </slot>>
        </div>
</named-slot>  
</template>
`)
export class F7NavRight {

    constructor(
       
    ) {

    }
}