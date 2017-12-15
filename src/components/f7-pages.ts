import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-pages')
@inlineView(`
<template>
<named-slot>
    <div class="pages">
        <slot></slot>
    </div>
</named-slot>
</template>
`)
export class F7Pages {
    
    constructor() {
    }
}
