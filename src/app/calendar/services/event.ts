export class Event {
    name: string;
    date: string;
    hour: string;
    timeZone: number;

    constructor(name: string, date: string, hour: string) {
        this.name = name;
        this.date = date;
        this.hour = hour;
        this.timeZone = new Date(date).getTimezoneOffset();
    }
}