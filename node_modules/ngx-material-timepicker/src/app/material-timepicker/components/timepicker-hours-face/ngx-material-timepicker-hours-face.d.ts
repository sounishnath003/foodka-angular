import { EventEmitter } from '@angular/core';
import { DateTime } from 'luxon';
import { ClockFaceTime } from '../../models/clock-face-time.interface';
export declare class NgxMaterialTimepickerHoursFace {
    selectedHour: ClockFaceTime;
    minTime: DateTime;
    maxTime: DateTime;
    format: number;
    hourChange: EventEmitter<ClockFaceTime>;
    hourSelected: EventEmitter<number>;
    hoursList: ClockFaceTime[];
    protected constructor(format: number);
    onTimeSelected(time: number): void;
}
