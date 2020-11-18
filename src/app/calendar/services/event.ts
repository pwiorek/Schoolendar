export class Event {
    name: string;
    date: Date;
    hour: string;
    timeZone: number;

    constructor(name: string, date: Date, hour: string) {
        this.name = name;
        this.date = date;
        this.hour = hour;
        this.timeZone = date.getTimezoneOffset();
    }
}