import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-message')
@inlineView(`
<template>
    <div class="\${classes}">
        <div class="message-name">\${name}</div>
        <div class="message-text">\${text}</div>
    </div>
</template>
`)
export class F7Message {
    @bindable name: string = 'Name';
    @bindable text: string = 'Message';
    @bindable type: string = 'sent';
    
    constructor() {
    }

    get classes(): string {
        var output = 'message message-' + this.type;
        return output;
    }
}
