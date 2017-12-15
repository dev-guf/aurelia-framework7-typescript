/// <reference path="../../../typings/index.d.ts" />
import { EventAggregator } from 'aurelia-event-aggregator';
export declare class Framework7Engine {
    private ea;
    constructor(ea: EventAggregator);
    instance: Framework7;
    mainView: Framework7.View;
    setUpFramework7(): void;
}
