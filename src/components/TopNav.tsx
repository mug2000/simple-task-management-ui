import { Container, Group, Paper, Title, useMantineTheme } from '@mantine/core';
import { NavLink } from 'react-router';

export function TopNav() {
    const theme = useMantineTheme();

    return (
        <Paper
            style={{
                backgroundColor: theme.colors.cyan[5],
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
            }}
            h="100%"
        >
            <Container size="lg" h="100%">
                <Group h="100%" justify="space-between" gap="xs">
                    <Title>Task Manager</Title>
                    <Group>
                        <NavLink to="/">All Tasks</NavLink>
                        <NavLink to="/completed">Completed Tasks</NavLink>
                    </Group>
                </Group>
            </Container>
        </Paper>
    );
}
