import { FrameworkConfiguration } from 'aurelia-framework';
export { Framework7Engine } from './services/Framework7Engine';
import { PLATFORM } from 'aurelia-framework'; 

import '../node_modules/framework7/dist/css/framework7.material.css';
import '../node_modules/framework7/dist/js/framework7.js';

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        PLATFORM.moduleName('./components/f7-nav-bar'),
        PLATFORM.moduleName('./components/f7-nav-left'),
        PLATFORM.moduleName('./components/f7-nav-right'),
        PLATFORM.moduleName('./components/f7-page'),
        PLATFORM.moduleName('./components/f7-pages'),
        PLATFORM.moduleName('./components/f7-view')
    ]);
}

