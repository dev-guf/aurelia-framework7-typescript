import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-list')
@inlineView(`
<template>
<div class="list-block">
    <ul>
        <slot></slot>
    </ul>
</div>
</template>
`)
export class F7List {
    
    constructor() {
    }
}
