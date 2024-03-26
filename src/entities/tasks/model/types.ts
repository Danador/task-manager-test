export interface ITask {
    id: string;
    name: string;
    estimate: number;
    realized: boolean;
    [key: string]: string | number | boolean;
}