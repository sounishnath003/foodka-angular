import { DateTime, NumberingSystem } from 'luxon';
import { TimePeriod } from '../models/time-period.enum';
import { TimeOptions } from '../models/time-options.interface';
export declare class TimeAdapter {
    static DEFAULT_FORMAT: number;
    static DEFAULT_LOCALE: string;
    static DEFAULT_NUMBERING_SYSTEM: NumberingSystem;
    static parseTime(time: string, opts: TimeOptions): DateTime;
    static formatTime(time: string, opts: TimeOptions): string;
    static toLocaleTimeString(time: string, opts?: TimeOptions): string;
    static isTimeAvailable(time: string, min?: DateTime, max?: DateTime, granularity?: 'hours' | 'minutes', minutesGap?: number, format?: number): boolean;
    /***
     *  Format hour according to time format (12 or 24)
     */
    static formatHour(currentHour: number, format: number, period: TimePeriod): number;
    static fromDateTimeToString(time: DateTime, format: number): string;
    private static getLocaleOptionsByTime;
}
