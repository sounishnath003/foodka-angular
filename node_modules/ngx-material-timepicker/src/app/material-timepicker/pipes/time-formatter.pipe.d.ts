import { PipeTransform } from '@angular/core';
import { TimeUnit } from '../models/time-unit.enum';
export declare class TimeFormatterPipe implements PipeTransform {
    transform(time: number | string, timeUnit: TimeUnit): any;
}
