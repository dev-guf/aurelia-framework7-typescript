import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-list-link')
@inlineView(`
<template>
<li>
    <a class="\${classes}" href="\${hrefString}">
        <div class="item-inner">
            <div class="item-title">\${textLeft}</div>
            <div class="item-title"><i class="icon icon-\${icon}"></i>\${textCenter}</div>
            <div class="item-title">\${textRight}<slot></slot></div>
        </div>
    </a>
</li>
</template>
`)
export class F7ListLink {
    @bindable icon: string = 'hidden';
    @bindable closePanel: boolean = false;
    @bindable textCenter: string = '';
    @bindable href: string = '';
    @bindable textLeft: string = '';
    @bindable textRight: string = '';
    @bindable id: string = '';

    constructor() {
    }
    
    get classes(): string {
        var output = 'item-content item-link';
        if (this.closePanel !== false) {
            output += ' close-panel';
        }
        return output;
    }

    get hrefString(): string {
        var output = '#';
        if (this.href !== '') {
            output = this.href;
        }
        if (this.id !== '') {
            output += '?id=' + this.id;
        }
        return output;
    }
}
