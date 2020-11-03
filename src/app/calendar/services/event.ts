export class Event {
    name: string;
    date: Date;
    time: string;
    timeZone: number;

    constructor(name: string, date: Date, time: string) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.timeZone = date.getTimezoneOffset();
    }
}