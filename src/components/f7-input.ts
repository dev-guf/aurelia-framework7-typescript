import { bindable, customElement, containerless, inject } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';

@containerless
@customElement('f7-input')
@inlineView(`
<template>
<div class="\${classes}">
    <input if.bind="!isSelect" type="\${type}" placeholder="\${placeholder}">
    <select if.bind="isSelect" value.bind="index" change.trigger="submit()">
        <option repeat.for="opt of allOpt" selected.bind="$index == default - 1 ? 'selected' : ''" value.bind="\$index">\${opt}</option>
    </select>
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

    constructor(private ea: EventAggregator) {
    }

    get isSelect(): boolean {
        return this.type == "select";
    }

    get classes(): string {
        var output = 'item-input';
        return output;
    }

    get allOpt(): string[] {
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
