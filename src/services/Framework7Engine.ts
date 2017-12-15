/// <reference path="../../typings/index.d.ts" />

import {  singleton } from 'aurelia-framework';

@singleton() 
export class Framework7Engine {
 
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

      this.mainView = this.instance.addView('.view-main', {
          domCache: true,
          main: true
      });
    }
}

export enum Platform {
  ios = "IOS",
  android = "Android"
}