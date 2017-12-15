/// <reference path="../../typings/index.d.ts" />

import { singleton } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@singleton()
@inject(EventAggregator)
export class Framework7Engine {

    constructor(private ea: EventAggregator) {


    }

    instance: Framework7;

    mainView: Framework7.View;



    setUpFramework7() {

        this.ea.subscribe('view-main-attached', () => {
            this.mainView = this.instance.addView('.view-main', {
                domCache: true,
                main: true
            });
        });

        this.instance = new Framework7({
            material: true,
            animateNavBackIcon: true
        })
    }
}
