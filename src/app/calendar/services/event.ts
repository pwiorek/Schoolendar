export class Event {
    name: string;
    date: string;
    hour: string;
    timeZone: number;
    type: string;

    constructor(name: string, date: string, hour: string, type: string) {
        this.name = name;
        this.date = this.formatDateToCorrectString(date);
        this.hour = hour;
        this.timeZone = new Date(date).getTimezoneOffset();
        this.type = type;
    }

    formatDateToCorrectString(date: string) {
        let newDate = new Date(date);
        let year = newDate.getFullYear();
        let month = newDate.getMonth();
        let day = newDate.getDate();
        return year + "-" + month + "-" + day;
    }
}