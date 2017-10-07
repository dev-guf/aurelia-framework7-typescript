

import { bindable, customElement, containerless } from 'aurelia-framework';


@containerless
@customElement('f7-nav-left')
export class F7NavLeft {
    @bindable 
    backLink: boolean = false;

    constructor(
       
    ) {

    }
}