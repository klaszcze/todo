export interface ITodo {
    readonly id: string;
    readonly title: string;
    readonly order?: number; 
    readonly url: string;
    readonly completed: boolean;
}