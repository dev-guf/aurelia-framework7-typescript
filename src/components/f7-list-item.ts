import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-list-item')
@inlineView(`
<template>
<li class="item-content">
    <div class="item-inner">
        <div class="item-title"><slot></slot></div>
    </div>
</li>
</template>
`)
export class F7ListItem {
    
    constructor() {
    }
}
