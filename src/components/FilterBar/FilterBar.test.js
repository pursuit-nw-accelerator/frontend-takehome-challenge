import { render } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('<FilterBar />', () => {
  it('delete this test', () => {
    const { getByText } = render(
      <FilterBar hobbies={[]} selectedFilters={[]} />
    );
    getByText('TODO: Add your filter buttons here');
  });
});
