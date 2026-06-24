import { createContext, use } from 'react';

import type { ISortContext } from '../lib/sort/types';

export const SortContext = createContext<ISortContext | undefined>(undefined);

export function useSort() {
    const context = use(SortContext);
    if (!context) throw new Error('useSort should only be used within <SortWrapper />');
    return context;
}
