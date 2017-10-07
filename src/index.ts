import { FrameworkConfiguration } from 'aurelia-framework';
export { Framework7Engine } from './services/Framework7Engine';
import { PLATFORM } from 'aurelia-framework'; 

export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        PLATFORM.moduleName('./components/F7View'),
        PLATFORM.moduleName('./components/F7Pages'),
        PLATFORM.moduleName('./components/F7Page'),
        PLATFORM.moduleName('./components/F7Navbar'),
        PLATFORM.moduleName('./components/F7NavLeft')
    ]);
}

