import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-chip')
@inlineView(`
<template>
<span class="\${classes}" style="\${style}">
    <span if.bind="isMedia" class="\${medialabel}">
        <img src=\"\${media}\">
    </span>
    <span class="\${label}">\${text}</span>
    <a if.bind="delete" href="#" class="chip-delete"></a>
</span>
</template>
`)
export class F7Chip {
    @bindable text: string = '';
    @bindable bg: string = '';    
    @bindable color: string = '';
    @bindable media: string = '';
    @bindable style: string = '';
    @bindable deleteable: string = 'false';

    constructor() {
    }

    get isMedia(): boolean {
        if (this.media == '') {
            return false;
        } else {
            return true;
        }
    }

    get classes(): string {
        var output = 'chip';
        if (this.bg !== '') {
            output += ' bg-' + this.bg;
        }
        if (this.color !== '') {
            output += ' color-' + this.color;
        }
        return output;
    }

    get label(): string {
        var output = "chip-label";
        return output;
    }

    get medialabel(): string {
        var output = "chip-media";
        return output;
    }

    get delete(): boolean {
        if (this.deleteable == 'false') {
            return false;
        } else {
            return true;
        }
    }
}
