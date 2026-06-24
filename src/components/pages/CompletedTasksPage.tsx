import { Container } from '@mantine/core';
import { CompletedTaskList } from '../CompletedTaskList';

export function CompletedTasksPage() {
    return (
        <Container size="lg" my="md">
            <CompletedTaskList />
        </Container>
    );
}
