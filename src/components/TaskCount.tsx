import { Text } from '@mantine/core';

import { useTasks } from '../hooks/use-tasks';

export function TaskCount() {
    const { tasks } = useTasks();

    const text =
        tasks.length === 0 ? 'No Tasks' : tasks.length === 1 ? '1 task' : `${tasks.length} tasks`;

    return (
        <Text size="lg" fw={700}>
            {text}
        </Text>
    );
}
