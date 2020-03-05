import { ClockFaceTime } from '../models/clock-face-time.interface';
import { DisabledTimeConfig } from '../models/disabled-time-config.interface';
export declare function getHours(format: number): ClockFaceTime[];
export declare function disableHours(hours: ClockFaceTime[], config: DisabledTimeConfig): ClockFaceTime[];
export declare function getMinutes(gap?: number): ClockFaceTime[];
export declare function disableMinutes(minutes: ClockFaceTime[], selectedHour: number, config: DisabledTimeConfig): ClockFaceTime[];
