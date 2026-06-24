import { Text } from '@mantine/core';

import { useSort } from '../hooks/use-sort';

export function SortIndicator() {
    const { sortBy, order } = useSort();

    if (!sortBy) return null;

    // future: add cases for different values of sortBy
    return <Text>Sorted by: Due Date ({order})</Text>;
}
