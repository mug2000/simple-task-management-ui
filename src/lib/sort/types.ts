export type SortField = 'dueDate' | null;
export type OrderField = 'asc' | 'desc';

export interface ISortContext {
    sortBy: SortField;
    order: OrderField;
    toggleBy: (by: NonNullable<SortField>) => void;
    clear: () => void;
}
