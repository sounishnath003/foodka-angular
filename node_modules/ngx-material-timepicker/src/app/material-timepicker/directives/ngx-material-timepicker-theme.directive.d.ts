import { AfterViewInit, ElementRef } from '@angular/core';
import { NgxMaterialTimepickerTheme } from '../models/ngx-material-timepicker-theme.interface';
export declare class NgxMaterialTimepickerThemeDirective implements AfterViewInit {
    theme: NgxMaterialTimepickerTheme;
    private element;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    private setTheme;
}
