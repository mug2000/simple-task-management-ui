import { TASK_STATUS } from './common/constants';
import type { OrderField, SortField } from './sort/types';
import type { Task } from './tasks/types';

// only safe if we're generating one ID at a time
// in real world scenario, use something like crypto.random() or uuid()
export function randomID(): number {
    return Date.now();
}

export function sortTasksBy(tasks: Task[], sortBy: SortField, order: OrderField): Task[] {
    if (!sortBy) return tasks;
    const ord = order === 'asc' ? 1 : -1;

    return tasks.toSorted((a, b) => {
        return ord * (a.dueDate.getTime() - b.dueDate.getTime());
    });
}

export function filterCompletedTasks(tasks: Task[]): Task[] {
    return tasks.filter((t) => t.status === TASK_STATUS.COMPLETED);
}
