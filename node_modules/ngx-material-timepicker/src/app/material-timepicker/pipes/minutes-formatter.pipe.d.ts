import { PipeTransform } from '@angular/core';
export declare class MinutesFormatterPipe implements PipeTransform {
    transform(minute: number, gap?: number): number | string;
}
