import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-list-link')
@inlineView(`
<template>
<li>
    <a class="item-content item-link\${close}" href="\${href}">
        <div class="item-inner">
            <div class="item-title"><slot></slot></div>
        </div>
    </a>
</li>
</template>
`)
export class F7ListLink {
    @bindable
    close: string = '';

    @bindable
    closePanel: boolean = false;
    @bindable
    href: string = '#';

    constructor() {
    }

    attached(){
        if (this.closePanel !== false){
            this.close = ' close-panel';
        }
    }
    
}
