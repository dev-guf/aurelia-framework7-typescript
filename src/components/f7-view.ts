import { bindable, customElement, containerless, TaskQueue, inject } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';


@containerless
@customElement('f7-view')
@inlineView(`
<template>
<div class="\${classes}">
    <slot></slot>
</div>
</template>
`)
@inject(EventAggregator, TaskQueue)
export class F7View {
    @bindable isMainView: boolean = false;

    ea: EventAggregator;

    constructor(EventAggregator, private taskQueue: TaskQueue) {
        this.ea = EventAggregator;
    }

    get classes(): string {
        var output = 'view';
        if (this.isMainView !== false) {
            output += ' view-main';
            this.taskQueue.queueMicroTask(() => {
                this.ea.publish('view-main-attached');
            });
        }
        return output;
    }
}
