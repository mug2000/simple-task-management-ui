import { createContext, use } from 'react';
import type { TaskId } from '../lib/tasks/types';

export interface IEditTaskContext {
    selectedTaskId: TaskId | null;
    reset: () => void;
    openModal: (id: TaskId) => void;
}

export const EditTaskContext = createContext<IEditTaskContext | undefined>(undefined);

export function useEditTaskModal() {
    const result = use(EditTaskContext);
    if (!result) throw new Error('useEditTaskModal should be used within <EditTaskModal />');
    return result;
}
