import { Center, Stack } from '@mantine/core';
import { useMemo } from 'react';
import { useEditTaskModal } from '../hooks/use-edit-task-modal';
import { useSort } from '../hooks/use-sort';
import { useTasks } from '../hooks/use-tasks';
import { TASK_STATUS } from '../lib/common/constants';
import type { TaskId } from '../lib/tasks/types';
import { sortTasksBy } from '../lib/utils';
import { TaskCard } from './TaskCard';

export function TaskList() {
    const { tasks, deleteTask, editTask } = useTasks();
    const { sortBy, order } = useSort();
    const { openModal } = useEditTaskModal();

    const tasksWithSorting = useMemo(
        () => sortTasksBy(tasks, sortBy, order),
        [tasks, sortBy, order]
    );

    function onDeleteTask(id: TaskId) {
        deleteTask(id);
    }

    function onMarkTaskInProgress(id: TaskId) {
        editTask(id, { status: TASK_STATUS.IN_PROGRESS });
    }

    function onMarkTaskCompleted(id: TaskId) {
        editTask(id, { status: TASK_STATUS.COMPLETED });
    }

    function onEditTask(id: TaskId) {
        openModal(id);
    }

    if (!tasksWithSorting.length) return <Center c="dimmed">(empty)</Center>;

    return (
        <Stack>
            {tasksWithSorting.map((t) => (
                <TaskCard
                    key={t.id}
                    task={t}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                    onMarkTaskCompleted={onMarkTaskCompleted}
                    onMarkTaskInProgress={onMarkTaskInProgress}
                />
            ))}
        </Stack>
    );
}
