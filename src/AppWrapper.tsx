import type { ReactNode } from 'react';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter } from 'react-router';
import { EditTaskModal } from './components/EditTaskModal';
import { SortWrapper } from './lib/sort/context';
import { TaskWrapper } from './lib/tasks/context';

const theme = createTheme({});

export default function AppWrapper({ children }: { children?: ReactNode }) {
    return (
        <MantineProvider theme={theme}>
            <Notifications />
            <BrowserRouter>
                <SortWrapper>
                    <TaskWrapper>
                        <EditTaskModal>{children}</EditTaskModal>
                    </TaskWrapper>
                </SortWrapper>
            </BrowserRouter>
        </MantineProvider>
    );
}
