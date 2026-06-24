import { Button } from '@mantine/core';

import { useSort } from '../hooks/use-sort';

export function SortButton() {
    const { sortBy, toggleBy, clear } = useSort();

    return (
        <Button.Group>
            <Button size="sm" color="cyan" onClick={() => toggleBy('dueDate')}>
                Toggle Sort by Due Date
            </Button>
            {sortBy && (
                <Button size="sm" color="cyan" onClick={clear}>
                    Reset
                </Button>
            )}
        </Button.Group>
    );
}
