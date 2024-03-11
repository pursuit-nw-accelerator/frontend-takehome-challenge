import { render } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('<FilterBar />', () => {
  it('renders an expand all button', () => {
    const { getByText } = render(
      <FilterBar hobbies={[]} selectedFilters={[]} />
    );
    getByText('Expand All');
  });

  it('renders a collapse all button', () => {
    const { getByText } = render(
      <FilterBar hobbies={[]} selectedFilters={[]} />
    );
    getByText('Collapse All');
  });
});
