import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-accordion-content')
@inlineView(`
<template>
<div class="\${classes}" style="\${style}">
    <slot></slot>
</div>
</template>
`)
export class F7AccordionContent {
    @bindable style: string = '';

    constructor() {
    }

    get classes(): string{
        var output = 'accordion-item-content';
        return output;
    }

}
