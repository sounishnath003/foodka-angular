import { DateTime } from 'luxon';
export declare function isSameOrAfter(time: DateTime, compareWith: DateTime, unit?: 'hours' | 'minutes'): boolean;
export declare function isSameOrBefore(time: DateTime, compareWith: DateTime, unit?: 'hours' | 'minutes'): boolean;
export declare function isBetween(time: DateTime, before: DateTime, after: DateTime, unit?: 'hours' | 'minutes'): boolean;
export declare function isDigit(e: KeyboardEvent): boolean;
