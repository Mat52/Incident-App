export class Incident {
    constructor(
        public id: number,
        public latitude: number,
        public longitude: number,
        public title: string,
        public description: string,
        public priority: string,
        public requestedBy: string,
        public date: string,
        public time: string,
        public isResolved: boolean
    ) { }

    getAddress(): string {
        return `${this.latitude}, ${this.longitude}`;  // Example return value, modify as per your needs
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}