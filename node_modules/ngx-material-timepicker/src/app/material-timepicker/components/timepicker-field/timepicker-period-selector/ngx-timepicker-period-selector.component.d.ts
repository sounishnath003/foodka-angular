import { EventEmitter } from '@angular/core';
import { TimePeriod } from '../../../models/time-period.enum';
export declare class NgxTimepickerPeriodSelectorComponent {
    private locale;
    isOpened: boolean;
    disabled: boolean;
    selectedPeriod: TimePeriod;
    periodSelected: EventEmitter<TimePeriod>;
    period: typeof TimePeriod;
    meridiems: string[];
    localizedPeriod: string;
    constructor(locale: string);
    open(): void;
    select(period: TimePeriod): void;
    backdropClick(): void;
}
