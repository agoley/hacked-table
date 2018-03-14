import { MatTooltipModule, MatSelectModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HackedTableComponent, HackedTableColumnComponent } from './hacked-table';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatInputModule, 
        MatSelectModule,        
        MatTooltipModule
    ],
    exports: [
        HackedTableColumnComponent,        
        HackedTableComponent
    ],
    declarations: [
        HackedTableColumnComponent,        
        HackedTableComponent
    ],
    bootstrap: [HackedTableComponent],
    providers: [],
})
export class HackedTableModule { }
