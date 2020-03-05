import { OnChanges, SimpleChanges } from '@angular/core';
import { NgxMaterialTimepickerHoursFace } from '../timepicker-hours-face/ngx-material-timepicker-hours-face';
import { TimePeriod } from '../../models/time-period.enum';
export declare class NgxMaterialTimepicker12HoursFaceComponent extends NgxMaterialTimepickerHoursFace implements OnChanges {
    period: TimePeriod;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
}
