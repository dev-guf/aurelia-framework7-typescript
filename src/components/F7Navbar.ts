
import { bindable, customElement, containerless } from 'aurelia-framework';

@containerless
@customElement('f7-navbar')
export class F7Navbar {
    @bindable 
    title: string = '';
   
    constructor(
       
    ) {

    }
}