import { render } from '@testing-library/react';
import User from './User';

const mockUser = require("../../data/data.json")[0]

describe('<User />', () => {
  it("renders the user's name", () => {
    const { getByText } = render(<User user={mockUser} />);
    getByText(mockUser.name);
  });
  it("renders the user's company", () => {
    const { getByText } = render(<User user={mockUser} />);
    getByText(`Company: ${mockUser.company}`);
  });
  it("does not renders the user's about", () => {
    const { queryByText } = render(<User user={mockUser} />);
    const userAbout = queryByText(mockUser.about)
    expect(userAbout).toBeNull();
  });
});
