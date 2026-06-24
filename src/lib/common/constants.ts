import type { MantineColor } from '@mantine/core';
import type { TaskStatus } from '../tasks/types';

export const TASK_STATUS: Record<Uppercase<TaskStatus>, TaskStatus> = Object.freeze({
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    COMPLETED: 'completed',
});

export const TASK_STATUS_COLOR: Record<Uppercase<TaskStatus>, MantineColor> = Object.freeze({
    COMPLETED: 'green.4',
    IN_PROGRESS: 'yellow.6',
    PENDING: 'red.5',
});
