import { customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-page-content')
@inlineView(`
<template>
    <div class="page-content">
        <slot></slot>
    </div> 
</template>
`)
export class F7PageContent {

    constructor() {
    }
}
