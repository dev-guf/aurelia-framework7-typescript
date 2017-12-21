import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-panel')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7Panel {
    @bindable right: boolean = false;
    @bindable left: boolean = true;
    
    constructor() {
    }

    get classes(): string {
        var output = 'panel panel-reveal';
        if (this.right !== false){
            output += ' panel-right';
        } else {
            output += ' panel-left';
        }
        return output;
    }
}
