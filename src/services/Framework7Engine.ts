/// <reference path="../../typings/index.d.ts" />

import { singleton } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@singleton()
@inject(EventAggregator)
export class Framework7Engine {

    constructor(private ea: EventAggregator) {


    }

 
    platform:Platform;
    instance: Framework7;
    mainView: Framework7.View;
    
    setUpFramework7 () {
      
      console.log("This is plat:" + MOBILE_PLATFORM);
      this.platform = (MOBILE_PLATFORM == "ios")? Platform.ios : Platform.android; 


      this.instance = new Framework7({
        material: true,
        animateNavBackIcon: true
      })


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

export enum Platform {
  ios = "IOS",
  android = "Android"
}