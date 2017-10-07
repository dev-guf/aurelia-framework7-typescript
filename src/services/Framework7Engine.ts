/// <reference path="../../typings/index.d.ts" />

import {  singleton } from 'aurelia-framework';

@singleton() 
export class Framework7Engine {
    
    instance: Framework7;

    mainView: Framework7.View;

    setUpFramework7 () {
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