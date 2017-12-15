import { FrameworkConfiguration } from 'aurelia-framework';
export { Framework7Engine } from './services/Framework7Engine';
import { PLATFORM } from 'aurelia-framework'; 


if (MOBILE_PLATFORM.toLowerCase() == "android"){
    require('../node_modules/framework7/dist/css/framework7.material.css');
    
} else {
    require('../node_modules/framework7/dist/css/framework7.ios.css');
}

import '../node_modules/framework7/dist/js/framework7.js';




export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        PLATFORM.moduleName('./components/f7-block'),
        PLATFORM.moduleName('./components/f7-center'),
        PLATFORM.moduleName('./components/f7-link'),
        PLATFORM.moduleName('./components/f7-list-item'),
        PLATFORM.moduleName('./components/f7-list-link'),
        PLATFORM.moduleName('./components/f7-list'),
        PLATFORM.moduleName('./components/f7-nav-left'),
        PLATFORM.moduleName('./components/f7-nav-right'),
        PLATFORM.moduleName('./components/f7-navbar'),
        PLATFORM.moduleName('./components/f7-page-content'),
        PLATFORM.moduleName('./components/f7-page'),
        PLATFORM.moduleName('./components/f7-pages'),
        PLATFORM.moduleName('./components/f7-panel-left'),
        PLATFORM.moduleName('./components/f7-panel-overlay'),
        PLATFORM.moduleName('./components/f7-panel-right'),
        PLATFORM.moduleName('./components/f7-statusbar'),
        PLATFORM.moduleName('./components/f7-view'),
        PLATFORM.moduleName('./components/f7-views')
    ]);
}

