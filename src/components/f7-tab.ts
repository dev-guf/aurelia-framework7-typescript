import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-tab')
@inlineView(`
<template>
    <div class="\${classes}" id="\${id}"><slot></slot></div>
</template>
`)
export class F7Tab {
    @bindable id: string;
    @bindable active: boolean = false;

    constructor() {
    }

    get classes(): string {
        var output = 'tab';
        if (this.active !== false) {
            output += ' active';
        }
        return output;
    }
}
