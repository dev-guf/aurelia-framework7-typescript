import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-link')
@inlineView(`
<template>
<a class="link\${panel}\${icon}\${bck} \${class}" data-panel="\${dataPan}" href="\${href}">
    <slot></slot>
</a>
</template>
`)
export class F7Link {
    @bindable icon: string;
    @bindable panel: string;
    @bindable dataPan: string = 'left';
    @bindable bck: string;
    @bindable class: string = '';

    @bindable iconOnly: boolean = false; //todo: this is coming as a string see this issue:
    @bindable openPanel: string = 'false';
    @bindable back: boolean = false;
    @bindable href: string = '#';
    
    constructor() {
    }

    attached(){
        if (this.iconOnly !== false){
            this.icon = ' icon-only';
        }
        if (this.openPanel !== 'false') {
            this.panel = " open-panel";
            if (this.openPanel == "right") {
                this.dataPan = "right";
                debugger
            }
        }
        if (this.back !== false) {
            this.bck = " back";
        }
    }
}
