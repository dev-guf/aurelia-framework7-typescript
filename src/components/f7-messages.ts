import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-messages')
@inlineView(`
<template>
    <div class="\${classes}">
        <slot></slot>
    </div>
</template>
`)
export class F7Messages {
    
    constructor() {
    }

    get classes(): string {
        var output = 'messages';
        return output;
    }
}
