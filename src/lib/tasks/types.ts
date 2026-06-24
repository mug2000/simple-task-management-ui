export type TaskId = number;

export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export type Task = {
    id: TaskId;
    title: string;
    description?: string;
    status: TaskStatus;
    dueDate: Date;
};

export interface IStore {
    tasks: Task[];
}

export type IAction =
    | { type: 'create_task'; payload: Task }
    | { type: 'edit_task'; payload: { id: TaskId; update: Partial<Task> } }
    | { type: 'delete_task'; payload: TaskId };

export interface ITaskContext extends IStore {
    createTask: (task: Task) => void;
    deleteTask: (taskId: TaskId) => void;
    editTask: (taskId: TaskId, updatedTask: Partial<Task>) => void;
}

function isTypeTaskId(data: unknown): data is TaskId {
    return typeof data === 'number' && !Number.isNaN(data);
}

function isTypeTaskStatus(data: unknown): data is TaskStatus {
    if (typeof data !== 'string') return false;

    return ['pending', 'in_progress', 'completed'].includes(data);
}

function isTypeTaskDueDate(data: unknown): data is Date {
    return data instanceof Date && !Number.isNaN(data.getTime());
}

export function isTypeTask(data: unknown): data is Task {
    if (!data || typeof data !== 'object') return false;

    // check all keys and primitive key types
    if (
        !('id' in data) ||
        !('title' in data) ||
        !('status' in data) ||
        !('dueDate' in data) ||
        !isTypeTaskId(data.id) ||
        typeof data.title !== 'string' ||
        !isTypeTaskStatus(data.status) ||
        !isTypeTaskDueDate(data.dueDate)
    )
        return false;

    if ('description' in data && typeof data.description !== 'string') return false;

    return true;
}

export function isTypeStore(data: unknown): data is IStore {
    if (!data || typeof data !== 'object' || !('tasks' in data) || !Array.isArray(data.tasks))
        return false;

    if (data.tasks.length === 0) return true;

    return data.tasks.every((t) => isTypeTask(t));
}
