import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { useSelector, useDispatch } from 'react-redux';
import { removeFilter, clearFilter, selectFilters } from './filter-slice';

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (!currentFilters.length) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>
        <button
          className="link"
          onClick={() => dispatch(clearFilter())}
        >Clear</button>
      </div>
    </Card>
  );
};

export { FilterPanel };