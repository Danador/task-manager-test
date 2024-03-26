import { defineStore } from 'pinia';
import type { ITask } from './types';

interface IState {
    tasks: ITask[];
}

export const useTasksStore = defineStore('tasks', {
    state: (): IState => ({
        tasks: [],
    }),
    getters: {
        getTaskById: (state) => {
            return (id: string): ITask => state.tasks.find(i => i.id === id)!;
        },
    },
});