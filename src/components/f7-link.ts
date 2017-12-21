import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-link')
@inlineView(`
<template>
<a class="\${classes}" data-panel="\${dataPan}" href="\${href}">
    <slot></slot>
</a>
</template>
`)
export class F7Link {
    @bindable dataPan: string = 'none';

    @bindable iconOnly: boolean = false;
    @bindable openPanel: string = 'false';
    @bindable back: boolean = false;
    @bindable href: string = '#';

    constructor() {
    }

    get classes(): string {
        var output = 'link';
        if (this.iconOnly !== false) {
            output += ' icon-only';
        }
        if (this.openPanel !== 'false') {
            output += ' open-panel';
            this.dataPan = this.openPanel;
        }
        if (this.back !== false) {
            output += ' back';
        }
        return output;
    }
}
