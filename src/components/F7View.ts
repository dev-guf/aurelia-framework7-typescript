

import { bindable, customElement, containerless } from 'aurelia-framework';

@containerless
@customElement('f7-view')
export class F7View {
    @bindable 
    name: string;

    @bindable 
    isMainView: boolean = false; //todo: this is coming as a string see this issue: 

    constructor(
       
    ) {

    }

    get viewName(): string{
        if (this.isMainView){
            return 'view-main'
        }
        return this.name;
    }

}