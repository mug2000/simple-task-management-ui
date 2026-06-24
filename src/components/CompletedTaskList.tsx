import { Center, Stack } from '@mantine/core';
import { useMemo } from 'react';
import { useTasks } from '../hooks/use-tasks';
import { filterCompletedTasks } from '../lib/utils';
import { TaskCard } from './TaskCard';

export function CompletedTaskList() {
    const { tasks } = useTasks();

    const filteredTasks = useMemo(() => filterCompletedTasks(tasks), [tasks]);

    if (!filteredTasks.length) return <Center c="dimmed">No completed tasks yet</Center>;

    return (
        <Stack>
            {filteredTasks.map((t) => (
                <TaskCard key={t.id} task={t} hideActions />
            ))}
        </Stack>
    );
}
