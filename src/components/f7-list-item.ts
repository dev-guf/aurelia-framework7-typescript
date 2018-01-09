import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-list-item')
@inlineView(`
<template>
<li class="\${classes}">
    <a if.bind="ifAcc" href="#" class="item-link">
      <div class="item-content">
        <div class="item-inner">
          <div class="item-title">\${title}</div>
        </div>
      </div>
    </a>
    <div class="\${classInner}">
        <slot></slot>
    </div>
</li>
</template>
`)
export class F7ListItem {
    @bindable accordionItem: boolean = false;
    @bindable title: string;
    
    constructor() {
    }

    get classes(): string {
        var output = 'item-content';
        if (this.accordionItem !== false) {
            output = 'accordion-item';
        }
        return output;
    }

    get ifAcc(): boolean {
        if (this.accordionItem === false) {
            return false;
        } else {
            return true;
        }
    }

    get classInner(): string {
        if (this.ifAcc) {
            return '';
        } else {
            return 'item-inner';
        }
    }
}
