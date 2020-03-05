import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ClockFaceTime } from '../../models/clock-face-time.interface';
import { TimeUnit } from '../../models/time-unit.enum';
import { TimePeriod } from '../../models/time-period.enum';
import { DateTime } from 'luxon';
export declare class NgxMaterialTimepickerMinutesFaceComponent implements OnChanges {
    minutesList: ClockFaceTime[];
    timeUnit: typeof TimeUnit;
    selectedMinute: ClockFaceTime;
    selectedHour: number;
    period: TimePeriod;
    minTime: DateTime;
    maxTime: DateTime;
    format: number;
    minutesGap: number;
    minuteChange: EventEmitter<ClockFaceTime>;
    ngOnChanges(changes: SimpleChanges): void;
}
