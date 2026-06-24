import { Button, Fieldset, Group, Input, Radio, Stack, Textarea, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { TASK_STATUS, TASK_STATUS_COLOR } from '../lib/common/constants';
import type { Task } from '../lib/tasks/types';

interface TaskFormProps {
    initialValues?: Task;
    onSubmit?: (value: Omit<Task, 'id'>) => void;
    onCancel?: () => void;
    fieldsetLegend?: string;
}

export function TaskForm({
    onSubmit,
    onCancel,
    initialValues,
    fieldsetLegend = 'Create New Task',
}: TaskFormProps) {
    const isEditing = Boolean(initialValues);

    const form = useForm<Omit<Task, 'id'>>({
        mode: 'uncontrolled',
        initialValues: isEditing
            ? initialValues
            : {
                  title: '',
                  description: '',
                  dueDate: new Date(),
                  status: TASK_STATUS.PENDING,
              },
        transformValues(values) {
            // Mantine UI's DatePickerInput stores a string value in the format "YYYY-MM-DD" instead of a JavaScript Date object
            return {
                ...values,
                dueDate: new Date(values.dueDate),
            };
        },
        validate: {
            description: (value) =>
                value && value?.length > 1000
                    ? "Description size limit shouldn't exceed 1000 characters"
                    : null,
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => onSubmit?.(values))}>
            <Stack>
                <Fieldset legend={fieldsetLegend}>
                    <Stack>
                        <TextInput label="Title" required {...form.getInputProps('title')} />
                        <Textarea label="Description" {...form.getInputProps('description')} />
                        <DatePickerInput label="Due" required {...form.getInputProps('dueDate')} />
                        <Input.Wrapper label="Status">
                            <Radio.Group {...form.getInputProps('status')}>
                                <Stack gap="xs">
                                    <Radio
                                        label="Pending"
                                        value={TASK_STATUS.PENDING}
                                        color={TASK_STATUS_COLOR.PENDING}
                                    />
                                    <Radio
                                        label="In Progress"
                                        value={TASK_STATUS.IN_PROGRESS}
                                        color={TASK_STATUS_COLOR.IN_PROGRESS}
                                    />
                                    <Radio
                                        label="Completed"
                                        value={TASK_STATUS.COMPLETED}
                                        color={TASK_STATUS_COLOR.COMPLETED}
                                    />
                                </Stack>
                            </Radio.Group>
                        </Input.Wrapper>
                    </Stack>
                </Fieldset>
                <Group justify="end">
                    {onCancel && (
                        <Button variant="transparent" color="gray.6" onClick={onCancel}>
                            Cancel
                        </Button>
                    )}
                    <Button disabled={!form.isDirty} type="submit">
                        Submit
                    </Button>
                </Group>
            </Stack>
        </form>
    );
}
