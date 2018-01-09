import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-login-screen')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
export class F7LoginScreen {

    constructor() {
    }

    get classes(): string{
        var output = 'login-screen';
        return output;
    }

}
