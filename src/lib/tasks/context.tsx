import { type ReactNode, useReducer } from 'react';
import { TaskContext } from '../../hooks/use-tasks';
import { initFromLocalStorage, usePersistTasks } from './persist';
import type { IAction, IStore, Task, TaskId } from './types';

function taskReducer(state: IStore, action: IAction): IStore {
    switch (action.type) {
        case 'create_task':
            return { tasks: [...state.tasks, action.payload] };
        case 'delete_task':
            return { tasks: state.tasks.filter((t) => t.id !== action.payload) };
        case 'edit_task':
            return {
                tasks: state.tasks.map((t) => {
                    if (t.id === action.payload.id) {
                        return { ...t, ...action.payload.update };
                    }
                    return t;
                }),
            };
        default:
            return state;
    }
}

export function TaskWrapper({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(taskReducer, { tasks: [] }, initFromLocalStorage);

    usePersistTasks(state);

    function createTask(task: Task) {
        dispatch({ type: 'create_task', payload: task });
    }

    function deleteTask(taskId: TaskId) {
        dispatch({ type: 'delete_task', payload: taskId });
    }

    function editTask(taskId: TaskId, update: Partial<Task>) {
        dispatch({ type: 'edit_task', payload: { id: taskId, update } });
    }

    return (
        <TaskContext value={{ ...state, createTask, deleteTask, editTask }}>
            {' '}
            {children}{' '}
        </TaskContext>
    );
}
