

import { bindable, customElement, containerless } from 'aurelia-framework';

@containerless
@customElement('f7-page')
export class F7Page {
    @bindable 
    name: string = '';

    @bindable 
    cached: boolean = false;

    @bindable 
    navbarThrough: boolean = false;

    @bindable 
    toolbarThrough: boolean = false;

    @bindable 
    navbarFixed: boolean = false;
    

    constructor(
       
    ) {

    }

    get classes(): string{
        var output = 'page ';
        if (this.navbarThrough){
            output += 'navbar-through ';
        }
        if (this.toolbarThrough){
            output += 'toolbar-through ';
        }
        if (this.navbarFixed ){
            output += 'navbar-fixed ';
        }

        if (this.cached){
            output += 'cached ';
        }
        
        return output;
    }

}