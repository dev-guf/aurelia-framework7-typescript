import { bindable, customElement, containerless } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';

@containerless
@customElement('f7-list-link')
@inlineView(`
<template>
<li>
    <a class="\${classes}" href="\${hrefString}">
        <table class="item-inner">
            <tr>
                <th>
                    <div class="item-title" style="min-width: 110px;"><i class="f7-icons size-22">\${iconLeftstr}</i><i class="f7-icons size-14">\${iconCheckstr}<span style="display: \${break}">&emsp;</span></i><b>\${textLeft}</b></div>
                </th>
                <th>
                    <div class="item-title" style="min-width: \${rightWidth}px; float: right; text-align: right;">\${textRight}<slot></slot></div>
                </th>
            </tr>
            <tr style="display: \${oneLiner}">
                <td colspan = "2";>
                    <div class="item-title" style="font-size=10px;"><i class="f7-icons size-14">\${icon}</i>\${textCenter}</div>
                </td>
            </tr>
        </table>
    </a>
</li>
</template>
`)
export class F7ListLink {
    @bindable icon: string = 'hidden';
    @bindable iconLeft: string = 'hidden';
    @bindable closePanel: boolean = false;
    @bindable oneLine: boolean = false;
    @bindable textCenter: string = '';
    @bindable href: string = '';
    @bindable textLeft: string = '';
    @bindable textRight: string = '';
    @bindable id: string = '';
    @bindable cat: string = '';
    @bindable type: string = '';
    @bindable needCheck: string = 'hidden';
    @bindable iconCheck: boolean = false;
    break: string = 'none';

    constructor() {
    }
    
    get classes(): string {
        var output = 'item-content item-link';
        if (this.closePanel !== false) {
            output += ' close-panel';
        }
        return output;
    }

    get hrefString(): string {
        var output = '#';
        if (this.href !== '') {
            output = this.href;
        }
        if (this.id !== '' && this.cat !== '') {
            output += '?id=' + this.id + '&cat=' + this.cat;
        }
        return output;
    }

    get iconLeftstr(): string {
        if (this.iconLeft == "Request for Tender" || this.iconLeft == "Select Tender") {
            this.iconLeft = 'T';
            this.break = 'auto';
        }
        if (this.iconLeft == "Request for Quote" || this.iconLeft == "Select Quote") {
            this.iconLeft = 'Q';
            this.break = 'auto';
        }
        return this.iconLeft;
    }

    get iconCheckstr(): string {
        if (this.needCheck === 'hidden') {
            return this.needCheck;
        }
        if (this.iconCheck) {
            return 'close';
        } else {
            return 'check';
        }
    }

    get rightWidth(): number {
        if (this.textRight !== '') {
            return 200;
        } else {
            return 0;
        }
    }

    get oneLiner(): string {
        if (this.oneLine !== false) {
            return 'none';
        } else {
            return 'table-row';
        }
    }
}
