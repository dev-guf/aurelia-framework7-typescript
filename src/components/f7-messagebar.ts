import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-messagebar')
@inlineView(`
<template>
    <div class="\${classes}">
        <div class="toolbar-inner">
            <textarea placeholder="Message"></textarea>
            <a href="#" class="link">Send</a>
        </div>
    </div>
</template>
`)
export class F7Messagebar {
    @bindable name: string = 'Name';
    @bindable text: string = 'Message';
    @bindable type: string = 'sent';
    
    constructor() {
    }

    get classes(): string {
        var output = 'toolbar messagebar';
        return output;
    }
}
