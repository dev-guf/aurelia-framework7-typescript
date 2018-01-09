import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-card')
@inlineView(`
<template>
<div class="\${classes}" style="\${style}">
    <div class="card-header">\${title}</div>
    <div if.bind="innerTest" class="card-content">
        <div class="card-content-inner">\${content}</div>
    </div>
    <div if.bind="!innerTest" class="card-content">\${content}</div>
    <div class="card-footer">\${footer}</div>
</div>
</template>
`)
export class F7Card {
    @bindable title: string;
    @bindable content: string;
    @bindable footer: string;
    @bindable inner: string = 'true';
    @bindable style: string = '';

    constructor() {
    }

    get classes(): string {
        var output = 'card';
        return output;
    }

    get innerTest(): boolean {
        if (this.inner == 'false') {
            return false;
        } else {
            return true;
        }
    }
}
