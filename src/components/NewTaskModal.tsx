import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTasks } from '../hooks/use-tasks';
import type { Task } from '../lib/tasks/types';
import { randomID } from '../lib/utils';
import { TaskForm } from './TaskForm';

export function NewTaskModal() {
    const [isModalOpen, { open, close }] = useDisclosure();

    const { createTask } = useTasks();

    const onTaskCreate = (task: Omit<Task, 'id'>) => {
        createTask({ ...task, id: randomID() });
        close();
    };

    return (
        <>
            <Button onClick={open} disabled={isModalOpen}>
                New Task
            </Button>
            <Modal opened={isModalOpen} onClose={close} centered withCloseButton={false}>
                <TaskForm onSubmit={onTaskCreate} onCancel={close} />
            </Modal>
        </>
    );
}
