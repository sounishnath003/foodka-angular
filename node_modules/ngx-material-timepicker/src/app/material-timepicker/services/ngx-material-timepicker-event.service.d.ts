import { Observable } from 'rxjs';
export declare class NgxMaterialTimepickerEventService {
    private backdropClickSubject;
    private keydownEventSubject;
    readonly backdropClick: Observable<MouseEvent>;
    readonly keydownEvent: Observable<KeyboardEvent>;
    dispatchEvent(event: KeyboardEvent | MouseEvent): void;
}
