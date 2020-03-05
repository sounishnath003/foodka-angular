import { PipeTransform } from '@angular/core';
export declare class ActiveMinutePipe implements PipeTransform {
    transform(minute: number, currentMinute: number, gap: number, isClockFaceDisabled: boolean): boolean;
}
