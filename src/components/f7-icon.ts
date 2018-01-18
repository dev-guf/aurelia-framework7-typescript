import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-icon')
@inlineView(`
<template>
    <i class="\${classes}" css="\${sizeStr}">
        \${f7}\${material}
    </i>
</template>
`)
export class F7Icon {
    @bindable icon: string;
    @bindable f7: string = '';
    @bindable material: string = '';
    @bindable fa: string;
    @bindable ion: string;
    @bindable size: string;
    @bindable color: string;
    
    constructor() {
    }

    get classes(): string {
        var output = 'icon';
        if (this.icon != undefined) {
            output += " " + this.icon;
        }
        if (this.f7 != '') {
            output += " f7-icons";
        }
        if (this.material != '') {
            output += " material-icons";
        }
        if (this.fa != undefined) {
            output += " fa fa-" + this.fa
        }
        if (this.ion != undefined) {
            output += " ion-" + this.fa
        }
        if (this.color != undefined) {
            output += " color-" + this.color;
        }
        return output;
    }

    get sizeStr(): string {
        if (this.size != undefined) {
            return "font-size: " + this.size;
        } else {
            return '';
        }
    }
}
