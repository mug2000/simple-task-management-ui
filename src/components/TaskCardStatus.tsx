import { Badge, type BadgeProps } from '@mantine/core';
import { useMemo } from 'react';
import { TASK_STATUS, TASK_STATUS_COLOR } from '../lib/common/constants';
import type { TaskStatus } from '../lib/tasks/types';

interface TaskCardStatusProps extends BadgeProps {
    status: TaskStatus;
}

export function TaskCardStatus({ status, ...badgeProps }: TaskCardStatusProps) {
    const color = useMemo(() => {
        switch (status) {
            case TASK_STATUS.COMPLETED:
                return TASK_STATUS_COLOR.COMPLETED;
            case TASK_STATUS.IN_PROGRESS:
                return TASK_STATUS_COLOR.IN_PROGRESS;
            default:
                return TASK_STATUS_COLOR.PENDING;
        }
    }, [status]);

    const text = useMemo(() => {
        switch (status) {
            case TASK_STATUS.COMPLETED:
                return 'Completed';
            case TASK_STATUS.IN_PROGRESS:
                return 'In Progress';
            case TASK_STATUS.PENDING:
                return 'Pending';
            default:
                return '';
        }
    }, [status]);

    return (
        <Badge size="md" color={color} {...badgeProps}>
            {text}
        </Badge>
    );
}
