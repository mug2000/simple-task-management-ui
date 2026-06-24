import { createContext, use } from 'react';

import type { ITaskContext } from '../lib/tasks/types';

export const TaskContext = createContext<ITaskContext | undefined>(undefined);

export function useTasks() {
    const context = use(TaskContext);
    if (!context) throw new Error('useTasks should only be used within <TaskWrapper />');
    return context;
}
