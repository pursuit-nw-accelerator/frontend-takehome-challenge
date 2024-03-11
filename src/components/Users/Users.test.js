import { render } from '@testing-library/react';
import Users from './Users';

const mockUsers = require("../../data/data.json")

describe('<Users />', () => {
  it('renders a list of users', () => {
    const { getByText } = render(
      <Users users={mockUsers} filters={[]} expanded={[]} />
    );
    getByText('Teddie Doodle');
    getByText('Peter Parker');
  });
});
