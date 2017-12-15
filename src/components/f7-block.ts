import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-block')
@inlineView(`
<template>
<div class="content-block\${titleStr}\${innerStr}\${insetStr}">
    <slot></slot>
</div>
</template>
`)
export class F7Block {
    @bindable titleStr: string = '';
    @bindable innerStr: string = '';
    @bindable insetStr: string = '';

    @bindable title: boolean = false;
    @bindable inner: boolean = false;
    @bindable inset: boolean = false;
    constructor() {
    }

    attached() {
        if (this.title !== false){
            this.titleStr = '-title';
        }
        if (this.inner !== false){
            this.innerStr = ' inner';
        }
        if (this.inset !== false){
            this.insetStr = ' inset';
        }
    }
}
