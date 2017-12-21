/// <reference path="../../typings/index.d.ts" />

import { singleton } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';


@singleton()
@inject(EventAggregator)
export class Framework7Engine {

    constructor(private ea: EventAggregator, public mainView: Framework7.View) {
        
    }    
    platform: Platform;
    instance: Framework7;
    

    setUpFramework7() {

        console.log("This is plat: " + MOBILE_PLATFORM);
        this.platform = (MOBILE_PLATFORM == "ios") ? Platform.ios : Platform.android;

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

        let eventArray = ['page:beforeinit', 'page:init','page:reinit', 'page:beforeanimation', 'page:afteranimation', 'page:beforeremove', 'page:back', 'page:afterback'];

        eventArray.forEach((eventName:string)=>{
            document.addEventListener(eventName,(e:any)=>{
                this.ea.publish(eventName,e.detail.page);
            });
        });
    }
}

export enum Platform {
    ios = "IOS",
    android = "Android"
}
