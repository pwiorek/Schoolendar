export class Event {
    name: string;
    date: string;
    hour: string;
    timeZone: number;
    type: string;

    constructor(name: string, date: string, hour: string, type: string) {
        this.name = name;
        this.date = date;
        this.hour = hour;
        this.timeZone = new Date(date).getTimezoneOffset();
        this.type = type;
    }
}