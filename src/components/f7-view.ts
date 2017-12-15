import { bindable, customElement, containerless, TaskQueue } from 'aurelia-framework';
import { inlineView } from 'aurelia-templating';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';


@containerless
@customElement('f7-view')
@inlineView(`
<template>
<div class="view \${name}">
    <slot></slot>
</div>
</template>
`)
@inject(EventAggregator, TaskQueue)
export class F7View {
    @bindable 
    name: string = '';

    @bindable 
    isMainView: boolean = false; //todo: this is coming as a string see this issue:

    ea: EventAggregator;

    constructor(EventAggregator, private taskQueue: TaskQueue) {
        this.ea = EventAggregator;
    }

    attached(){
        if (this.isMainView !== false){
            this.name = 'view-main';
            this.taskQueue.queueMicroTask(() => {
                this.ea.publish('view-main-attached');
            });
        }
    }
}
