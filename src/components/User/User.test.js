import { render } from '@testing-library/react';
import User from './User';

const mockUser = {
  id: 1,
  age: 35,
  name: 'Teddie Doodle',
  company: 'BUZZWORKS',
  country: 'Greenland',
  photo: 'https://randomuser.me/api/portraits/lego/0.jpg',
  about:
    "Hi there! I'm Teddie Doodle, a 35-year-old from Greenland. I work at BUZZWORKS, where I'm passionate about what I do and always strive to exceed expectations. In my free time, I love to spend time with my loved ones and take on new adventures. I'm excited to see what the future holds and what opportunities lie ahead.",
  hobbies: ['yoga', 'board games', 'video games', 'tennis'],
};

describe('<User />', () => {
  it("renders the user's name", () => {
    const { getByText } = render(<User user={mockUser} />);
    getByText(mockUser.name);
  });
});
