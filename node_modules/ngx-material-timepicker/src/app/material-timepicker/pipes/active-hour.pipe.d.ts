import { PipeTransform } from '@angular/core';
export declare class ActiveHourPipe implements PipeTransform {
    transform(hour: number, currentHour: number, isClockFaceDisabled: boolean): boolean;
}
