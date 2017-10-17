import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-page')
@inlineView(`
<template>
<div data-page.bind="name" class.bind="classes">
        <slot></slot>
</div>  
</template>
`)
export class F7Page {
    @bindable 
    name: string = '';

    @bindable 
    cached: boolean = false;

    @bindable 
    navbarThrough: boolean = false;

    @bindable 
    toolbarThrough: boolean = false;

    @bindable 
    navbarFixed: boolean = false;
    

    constructor(
       
    ) {

    }

    get classes(): string{
        var output = 'page ';
        if (this.navbarThrough){
            output += 'navbar-through ';
        }
        if (this.toolbarThrough){
            output += 'toolbar-through ';
        }
        if (this.navbarFixed ){
            output += 'navbar-fixed ';
        }

        if (this.cached){
            output += 'cached ';
        }
        
        return output;
    }

}