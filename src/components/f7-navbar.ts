import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-navbar')
@inlineView(`
<template>
<div class="\${classes}">
    <div class="navbar-inner">
        <slot></slot>
        <div class="center" if.bind="title !== ''">\${title}</div>
    </div>
</div>
</template>
`)
export class F7Navbar {
    @bindable title: string = '';
    @bindable color: string = 'blue';
   
    constructor() {
    }

    get classes(): string {
        var output = 'navbar theme-' + this.color;
        
        return output;
        
    }
}
