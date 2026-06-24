import type { ReactNode } from 'react';
import { useState } from 'react';

import { SortContext } from '../../hooks/use-sort';
import type { OrderField, SortField } from '../sort/types';

type State = {
    sortBy: SortField;
    order: OrderField;
};

export function SortWrapper({ children }: { children?: ReactNode }) {
    const [{ sortBy, order }, setState] = useState<State>({
        sortBy: null,
        order: 'asc',
    });

    function toggleBy(by: NonNullable<SortField>) {
        if (sortBy === by) {
            setState((prev) => ({ ...prev, order: prev.order === 'asc' ? 'desc' : 'asc' }));
            return;
        }

        setState({ sortBy: by, order: 'asc' });
    }

    function clear() {
        setState({ sortBy: null, order: 'asc' });
    }

    return <SortContext value={{ sortBy, order, clear, toggleBy }}>{children}</SortContext>;
}
