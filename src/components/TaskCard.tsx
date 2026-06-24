import { Button, Card, Group, Space, Text, Title } from '@mantine/core';
import { memo } from 'react';
import { TASK_STATUS, TASK_STATUS_COLOR } from '../lib/common/constants';
import type { Task, TaskId } from '../lib/tasks/types';
import { TaskCardStatus } from './TaskCardStatus';

interface TaskCardActions {
    onDeleteTask: (taskId: TaskId) => void;
    onEditTask: (taskId: TaskId) => void;
    onMarkTaskCompleted: (taskId: TaskId) => void;
    onMarkTaskInProgress: (taskId: TaskId) => void;
}

type TaskCardProps =
    | ({ task: Task; hideActions?: false } & TaskCardActions)
    | { task: Task; hideActions: true };

export const TaskCard = memo((props: TaskCardProps) => {
    const { task, hideActions } = props;
    function onClickDelete() {
        if (!hideActions) props.onDeleteTask(task.id);
    }

    function onClickEdit() {
        if (!hideActions) props.onEditTask(task.id);
    }

    function onClickMarkCompleted() {
        if (!hideActions) props.onMarkTaskCompleted(task.id);
    }

    function onClickMarkInProgress() {
        if (!hideActions) props.onMarkTaskInProgress(task.id);
    }

    return (
        <Card withBorder p="lg" shadow="sm" component="article">
            <Group>
                <Title order={2} size="xl">
                    {task.title}
                </Title>
                <TaskCardStatus status={task.status} />
            </Group>
            <Group>
                <Text size="xs">
                    Due:{' '}
                    <time dateTime={task.dueDate.toISOString()}>{task.dueDate.toDateString()}</time>
                </Text>
            </Group>
            {task.description && (
                <>
                    <Space h="sm" />
                    <Group>
                        <Text size="md" c="dimmed">
                            {task.description}
                        </Text>
                    </Group>
                </>
            )}
            <Space h="sm" />
            {!hideActions && (
                <Group justify="space-between">
                    <Group>
                        {task.status === TASK_STATUS.IN_PROGRESS && (
                            <Button
                                aria-label={`Mark Task ${task.title} in progress`}
                                onClick={onClickMarkCompleted}
                                color={TASK_STATUS_COLOR.COMPLETED}
                                size="compact-sm"
                            >
                                Mark Completed
                            </Button>
                        )}
                        {task.status === TASK_STATUS.PENDING && (
                            <Button
                                aria-label={`Mark Task ${task.title} in complete`}
                                onClick={onClickMarkInProgress}
                                color={TASK_STATUS_COLOR.IN_PROGRESS}
                                variant="outline"
                                size="compact-sm"
                            >
                                Mark In Progress
                            </Button>
                        )}
                    </Group>
                    <Group>
                        <Button
                            aria-label={`Edit task ${task.title}`}
                            onClick={onClickEdit}
                            color="gray"
                            variant="transparent"
                            size="compact-sm"
                        >
                            Edit
                        </Button>
                        <Button
                            aria-label={`Delete task ${task.title}`}
                            onClick={onClickDelete}
                            color="red.6"
                            variant="subtle"
                            size="compact-sm"
                        >
                            Delete
                        </Button>
                    </Group>
                </Group>
            )}
        </Card>
    );
});
