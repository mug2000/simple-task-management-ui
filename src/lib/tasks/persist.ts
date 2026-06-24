import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';

import { type IStore, isTypeStore } from './types';

const LOCAL_STORAGE_KEY = 'store';

const initState: IStore = { tasks: [] };

export function usePersistTasks(state: IStore) {
    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
        } catch (err: unknown) {
            console.error('Unable to write to localStorage: ', err);
            notifications.show({ message: 'Unable to write to localStorage' });
        }
    }, [state]);
}

export function initFromLocalStorage(): IStore {
    const serialized = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!serialized) {
        return initState;
    }

    const store =
        JSON.parse(serialized, (key: string, val: unknown) => {
            if (key === 'dueDate' && typeof val === 'string') {
                return new Date(val);
            }
            return val;
        }) ?? initState;

    // validate if localStorage data has the right structure
    if (isTypeStore(store)) return store;

    console.error('Unable to parse tasks from localStorage');
    notifications.show({ message: 'Unable to parse tasks from localStorage' });
    return initState;
}
