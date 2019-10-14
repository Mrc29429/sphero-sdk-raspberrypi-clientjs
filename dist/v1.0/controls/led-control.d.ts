import { IToy } from '../toy-interface';
export declare class LedControl {
    private readonly _baseUrl;
    readonly statusIndicationLeft: string;
    readonly statusIndicationRight: string;
    readonly headlightLeft: string;
    readonly headlightRight: string;
    readonly batteryDoorFront: string;
    readonly batteryDoorRear: string;
    readonly powerButtonFront: string;
    readonly powerButtonRear: string;
    readonly brakelightLeft: string;
    readonly brakelightRight: string;
    readonly undercarriageWhite: string;
    readonly red: string;
    readonly green: string;
    readonly blue: string;
    readonly off: string;
    readonly white: string;
    readonly yellow: string;
    readonly purple: string;
    readonly orange: string;
    readonly pink: string;
    constructor(rvrToy: IToy);
    getAvailableLedGroups(): Promise<string>;
    getAvailableColors(): Promise<string>;
    turnLedsOff(): void;
    setLedRgb(ledGroup: string, red: number, green: number, blue: number): void;
    setLedColor(ledGroup: string, color: string): void;
    setAllLedsRgb(red: number, green: number, blue: number): void;
    setAllLedsColor(color: string): void;
    setMultipleLedsRgb(ledGroups: Array<string>, red: number, green: number, blue: number): void;
    setMultipleLedsColor(ledGroups: Array<string>, color: string): void;
}
