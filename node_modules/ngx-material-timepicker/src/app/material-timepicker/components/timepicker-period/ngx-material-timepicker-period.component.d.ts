import { EventEmitter } from '@angular/core';
import { TimePeriod } from '../../models/time-period.enum';
import { TimeUnit } from '../../models/time-unit.enum';
import { ClockFaceTime } from '../../models/clock-face-time.interface';
import { DateTime } from 'luxon';
export declare class NgxMaterialTimepickerPeriodComponent {
    timePeriod: typeof TimePeriod;
    isPeriodAvailable: boolean;
    selectedPeriod: TimePeriod;
    format: number;
    activeTimeUnit: TimeUnit;
    hours: ClockFaceTime[];
    minutes: ClockFaceTime[];
    minTime: DateTime;
    maxTime: DateTime;
    selectedHour: number | string;
    meridiems: string[];
    periodChanged: EventEmitter<TimePeriod>;
    changePeriod(period: TimePeriod): void;
    animationDone(): void;
    private isSwitchPeriodAvailable;
    private getDisabledTimeByPeriod;
}
