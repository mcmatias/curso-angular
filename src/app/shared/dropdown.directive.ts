import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    
    @HostBinding('class.open') isOpen = false;
// the open class is the css class that we need. But this class should be attached only
// when we click on it, that is why we are attaching and deattaching the open attribute of the class
// dynamically

    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}