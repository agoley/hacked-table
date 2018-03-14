import { Component, ElementRef, Input } from "@angular/core";


@Component({
    selector: 'hacked-table-column',
    templateUrl: 'hacked-table-column.component.html',
    styleUrls: ['./hacked-table-column.component.scss']
    
})

export class HackedTableColumnComponent {
    @Input() header: string;
    @Input() accessor: any;
    @Input() type: string;
    @Input() getItems: Function;
    
    constructor(elementRef: ElementRef) {
        elementRef.nativeElement.classList.add('hacked-table-column');
     }
}