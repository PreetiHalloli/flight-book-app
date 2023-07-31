export class Cities{
    id: number | undefined;
    city: string | undefined;
    country: string | undefined;
    code: number | undefined;
    airport: number| undefined;
}

export class Flights{
    id!: number;
    airlineName!: string;
    stops!: string;
    durations!: string;
    startTime!: string;
    endTime!: string;
    price!: number;
}