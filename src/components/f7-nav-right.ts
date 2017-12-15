import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-nav-right')
@inlineView(`
<template> 
    <div class="right">
        <slot></slot>
    </div>
</template>
`)
export class F7NavRight {

    constructor() {
    }
}
