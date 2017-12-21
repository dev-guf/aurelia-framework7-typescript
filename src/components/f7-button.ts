import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-button')
@inlineView(`
<template>
<a href="\${href}" class="\${classes}">
    <slot></slot>
</a>
</template>
`)
export class F7Button {
    @bindable href: string = "#";

    constructor() {
    }

    get classes(): string{
        var output = 'button';
        return output;
    }

}
