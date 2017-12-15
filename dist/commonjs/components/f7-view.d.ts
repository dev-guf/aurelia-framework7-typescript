import { TaskQueue } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
export declare class F7View {
    private taskQueue;
    name: string;
    isMainView: boolean;
    ea: EventAggregator;
    constructor(EventAggregator: any, taskQueue: TaskQueue);
    attached(): void;
}
