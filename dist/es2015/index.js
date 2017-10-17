export { Framework7Engine } from './services/Framework7Engine';
import { PLATFORM } from 'aurelia-framework';
export function configure(aurelia) {
    aurelia.globalResources([
        PLATFORM.moduleName('./components/f7-nav-bar'),
        PLATFORM.moduleName('./components/f7-nav-left'),
        PLATFORM.moduleName('./components/f7-nav-right'),
        PLATFORM.moduleName('./components/f7-page'),
        PLATFORM.moduleName('./components/f7-pages'),
        PLATFORM.moduleName('./components/f7-view')
    ]);
}
