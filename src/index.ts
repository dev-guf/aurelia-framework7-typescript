import { FrameworkConfiguration } from 'aurelia-framework';
export { Framework7Engine } from './services/Framework7Engine';
import { PLATFORM } from 'aurelia-framework'; 


if (MOBILE_PLATFORM.toLowerCase() == "android"){
    require('../node_modules/framework7/dist/css/framework7.material.css');
    require('../node_modules/framework7/dist/css/framework7.material.colors.css');
    
} else {
    require('../node_modules/framework7/dist/css/framework7.ios.css');
    require('../node_modules/framework7/dist/css/framework7.ios.colors.css');
}

import '../node_modules/framework7/dist/js/framework7.js';




export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        PLATFORM.moduleName('./components/f7-accordion-content'),
        PLATFORM.moduleName('./components/f7-accordion-item'),
        PLATFORM.moduleName('./components/f7-accordion-toggle'),
        PLATFORM.moduleName('./components/f7-accordion'),
        PLATFORM.moduleName('./components/f7-actions-button'),
        PLATFORM.moduleName('./components/f7-actions-group'),
        PLATFORM.moduleName('./components/f7-actions-label'),
        PLATFORM.moduleName('./components/f7-actions'),
        PLATFORM.moduleName('./components/f7-badge'),
        PLATFORM.moduleName('./components/f7-block-title'),
        PLATFORM.moduleName('./components/f7-block'),
        PLATFORM.moduleName('./components/f7-button'),
        PLATFORM.moduleName('./components/f7-buttons'),
        PLATFORM.moduleName('./components/f7-card'),
        PLATFORM.moduleName('./components/f7-center'),
        PLATFORM.moduleName('./components/f7-chip'),
        PLATFORM.moduleName('./components/f7-col'),
        PLATFORM.moduleName('./components/f7-entry'),
        PLATFORM.moduleName('./components/f7-grid'),
        PLATFORM.moduleName('./components/f7-icon'),
        PLATFORM.moduleName('./components/f7-input'),
        PLATFORM.moduleName('./components/f7-label'),
        PLATFORM.moduleName('./components/f7-link'),
        PLATFORM.moduleName('./components/f7-list-button'),
        PLATFORM.moduleName('./components/f7-list-item'),
        PLATFORM.moduleName('./components/f7-list-link'),
        PLATFORM.moduleName('./components/f7-list'),
        PLATFORM.moduleName('./components/f7-login-screen'),
        PLATFORM.moduleName('./components/f7-message'),
        PLATFORM.moduleName('./components/f7-messagebar'),
        PLATFORM.moduleName('./components/f7-messages'),
        PLATFORM.moduleName('./components/f7-nav-left'),
        PLATFORM.moduleName('./components/f7-nav-right'),
        PLATFORM.moduleName('./components/f7-navbar'),
        PLATFORM.moduleName('./components/f7-page-content'),
        PLATFORM.moduleName('./components/f7-page'),
        PLATFORM.moduleName('./components/f7-pages'),
        PLATFORM.moduleName('./components/f7-panel-overlay'),
        PLATFORM.moduleName('./components/f7-panel'),
        PLATFORM.moduleName('./components/f7-popover'),
        PLATFORM.moduleName('./components/f7-popup'),
        PLATFORM.moduleName('./components/f7-statusbar'),
        PLATFORM.moduleName('./components/f7-tab'),
        PLATFORM.moduleName('./components/f7-tabs'),
        PLATFORM.moduleName('./components/f7-view'),
        PLATFORM.moduleName('./components/f7-views')
    ]);
}

