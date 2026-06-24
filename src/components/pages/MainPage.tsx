import { Container, Group, Space } from '@mantine/core';

import { NewTaskModal } from '../NewTaskModal';
import { SortButton } from '../SortButton';
import { SortIndicator } from '../SortIndicator';
import { TaskCount } from '../TaskCount';
import { TaskList } from '../TaskList';

export function MainPage() {
    return (
        <Container size="lg" my="md">
            <Group justify="space-between">
                <Group>
                    <NewTaskModal />
                    <SortButton />
                </Group>
                <Group>
                    <SortIndicator />
                    <TaskCount />
                </Group>
            </Group>
            <Space h="md" />
            <TaskList />
        </Container>
    );
}
