import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { type ReactNode, useState } from 'react';
import { EditTaskContext } from '../hooks/use-edit-task-modal';
import { useTasks } from '../hooks/use-tasks';
import type { Task, TaskId } from '../lib/tasks/types';
import { TaskForm } from './TaskForm';

export function EditTaskModal({ children }: { children: ReactNode }) {
    const [selectedTaskId, setSelectedTaskId] = useState<TaskId | null>(null);
    const [isModalOpen, { open, close }] = useDisclosure();
    const { tasks, editTask } = useTasks();

    function reset() {
        setSelectedTaskId(null);
        close();
    }

    function openModal(id: TaskId) {
        setSelectedTaskId(id);
        open();
    }

    function onEditSubmit(value: Omit<Task, 'id'>) {
        if (!selectedTaskId) return;
        editTask(selectedTaskId, value);
        reset();
    }

    const task = tasks.find((t) => t.id === selectedTaskId);

    return (
        <EditTaskContext value={{ selectedTaskId, reset, openModal }}>
            <Modal opened={isModalOpen} onClose={reset} centered withCloseButton={false}>
                <TaskForm
                    onSubmit={onEditSubmit}
                    onCancel={reset}
                    initialValues={task}
                    fieldsetLegend="Edit task"
                />
            </Modal>
            {children}
        </EditTaskContext>
    );
}
