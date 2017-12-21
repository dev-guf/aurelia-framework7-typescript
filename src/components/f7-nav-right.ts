import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-nav-right')
@inlineView(`
<template> 
    <div class="\${classes}">
        <slot></slot>
    </div>
</template>
`)
export class F7NavRight {

    constructor() {
    }
    
    get classes(): string {
        var output = 'right';
        return output;
    }
}
