import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-view')
@inlineView(`
<template>
<div class="view ${ this.name }">
    <slot></slot>
</div>
</template>
`)
export class F7View {
    @bindable 
    name: string;

    @bindable 
    isMainView: boolean = false; //todo: this is coming as a string see this issue: 

    constructor(
       
    ) {

    }

    get viewName(): string{
        if (this.isMainView){
            return 'view-main'
        }
        return this.name;
    }
}