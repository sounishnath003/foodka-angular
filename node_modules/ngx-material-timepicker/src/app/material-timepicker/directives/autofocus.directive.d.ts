import { ElementRef, OnChanges, OnDestroy } from '@angular/core';
export declare class AutofocusDirective implements OnChanges, OnDestroy {
    private element;
    private document;
    isFocusActive: boolean;
    private activeElement;
    constructor(element: ElementRef, document: any);
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
