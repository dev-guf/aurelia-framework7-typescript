import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-navbar')
@inlineView(`
<template>
<div class="navbar">
    <div class="navbar-inner">
        <slot></slot>
        <div class="center">"\${title}"</div>
    </div>
</div>
</template>
`)
export class F7Navbar {
    @bindable 
    title: string = '';
   
    constructor(
       
    ) {

    }
}