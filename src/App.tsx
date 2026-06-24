import { AppShell } from '@mantine/core';
import { Route, Routes } from 'react-router';
import AppWrapper from './AppWrapper';
import { CompletedTasksPage } from './components/pages/CompletedTasksPage';
import { MainPage } from './components/pages/MainPage';
import { TopNav } from './components/TopNav';

function App() {
    return (
        <AppWrapper>
            <AppShell header={{ height: { base: 90, sm: 60 } }} withBorder={false}>
                <AppShell.Header>
                    <TopNav />
                </AppShell.Header>
                <AppShell.Main>
                    <Routes>
                        <Route path="/" Component={MainPage} />
                        <Route path="/completed" Component={CompletedTasksPage} />
                    </Routes>
                </AppShell.Main>
            </AppShell>
        </AppWrapper>
    );
}

export default App;
