import { bindable, customElement, containerless, inject } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';

@containerless
@customElement('f7-input')
@inlineView(`
<template>
<div class="\${classes}">
    <input if.bind="isOther" type="\${type}" placeholder="\${placeholder}">
    <select if.bind="isSelect" value.bind="index" change.trigger="submit()">
        <option repeat.for="opt of allOpts" selected.bind="$index == default - 1 ? 'selected' : ''" value.bind="\$index + \$start">\${opt}</option>
    </select>
    <label if.bind="isSwitch" class="label-switch">
        <input type="checkbox" value="">
        <div class="checkbox"></div>
    </label>
    <input if.bind="isRange" type="range" max="\${max}" min="\${min}" step="\${step}"></div>
    <textarea if.bind="isTextarea" type="textarea" placeholder="Textarea"></textarea>
</div>
</template>
`)
@inject(EventAggregator)
export class F7Input {
    @bindable type: string = 'select';
    @bindable placeholder: string = '';
    @bindable options: string = '';
    @bindable index: number;
    @bindable default: number = 1;
    @bindable start: number = 0;
    @bindable max: number = 100;
    @bindable min: number = 0;
    @bindable step: number = 1;

    constructor(private ea: EventAggregator) {
    }

    get isOther(): boolean {
        if (this.isSelect || this.isSwitch || this.isRange || this.isTextarea) {
            return false;
        } else {
            return true;
        }
    }

    get isSelect(): boolean {
        return this.type == "select";
    }

    get isSwitch(): boolean {
        return this.type == 'switch';
    }

    get isRange(): boolean {
        return this.type == 'range';
    }

    get isTextarea(): boolean {
        return this.type == 'textarea';
    }

    get classes(): string {
        var output = 'item-input';
        return output;
    }

    get allOpts(): string[] {
        return this.options.split(", ");
    }


    @bindable page: number;
    opts: string[][] = [
        ['none', 'age', 'reg', 'cat', 'req', 'rel', 'clo'],
        ['none', 'age', 'reg', 'cat', 'req', 'clo'],
        ['none', 'age', 'reg', 'cat', 'awaStat', 'awaDat'],
        ['none', 'age', 'reg', 'cat', 'pri', 'exp', 'nam']
    ];
    
    submit() {
        this.ea.publish('pageUpdate' + this.page, this.opts[this.page - 1][+this.index]);
    }
}
