import { render, waitFor } from '@testing-library/react';
import App from './App';

const mockUsers = [
  {
    id: 1,
    age: 35,
    name: 'Teddie Doodle',
    company: 'BUZZWORKS',
    country: 'Greenland',
    photo: 'https://randomuser.me/api/portraits/lego/0.jpg',
    about:
      "Hi there! I'm Teddie Doodle, a 35-year-old from Greenland. I work at BUZZWORKS, where I'm passionate about what I do and always strive to exceed expectations. In my free time, I love to spend time with my loved ones and take on new adventures. I'm excited to see what the future holds and what opportunities lie ahead.",
    hobbies: ['yoga', 'board games', 'video games', 'tennis'],
  },
  {
    id: 2,
    age: 29,
    name: 'Peter Parker',
    company: 'Stark Industries',
    country: 'Romania',
    photo: 'https://randomuser.me/api/portraits/lego/1.jpg',
    about:
      'Peter is an intern at Stark Industries. His favorite borough is Queens',
    hobbies: ['golf', 'cooking', 'podcasts', 'painting'],
  },
  // add more mock data here...
];

const mockErrorMessage = 'Oh no! The server room was flooded!';

describe('<App />', () => {
  describe('happy path (no API errors)', () => {
    /* START mock fetch code 
       This code lets the tests run without using the internet or API.
       The users "fetched" from the API will be the mockUsers array above.
       You should not change the code between the START and END comments
    */
    let realFetch;
    beforeEach(() => {
      realFetch = global.fetch;

      const mockJson = { data: mockUsers };
      const mockResponse = {
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockJson),
      };

      const mockFetch = jest.fn().mockResolvedValueOnce(mockResponse);
      global.fetch = mockFetch;
    });

    afterEach(() => {
      global.fetch = realFetch;
    });
    /* END mock fetch code */

    /* add more tests here */

    // TODO: Add a loading state so that this test passes
    // (It will fail until you do this)
    it('should have a temporary loading state', async () => {
      const { findByText, queryByText } = render(<App />);
      await findByText('Loading...');
      await waitFor(() => expect(queryByText('Loading...')).toBeNull());
    });

    // TODO: Use FETCH (not Axios) to fetch data from the API
    // (It will fail until you do this)
    it('should fetch data', async () => {
      const { findByText } = render(<App />);
      await findByText('Teddie Doodle');
      await findByText('Peter Parker');
    });
  });
  describe('sad path (no API errors)', () => {
    /* START mock fetch code 
       This code lets the tests run without using the internet or API.
       It simulates receiving a 500 from the server with the json { error: mockErrorMessage }
       You should not change the code between the START and END comments
    */
    let realFetch;
    beforeEach(() => {
      realFetch = global.fetch;

      const mockJson = { error: mockErrorMessage };
      const mockResponse = {
        ok: false,
        status: 500,
        json: jest.fn().mockResolvedValueOnce(mockJson),
      };

      const mockFetch = jest.fn().mockResolvedValueOnce(mockResponse);
      global.fetch = mockFetch;
    });

    afterEach(() => {
      global.fetch = realFetch;
    });
    /* END mock fetch code */

    /* add more tests here */

    // TODO: Add an error state so that this test passes
    // (It will fail until you do this)
    it('should have an error state', async () => {
      const { findByText } = render(<App />);
      await findByText(mockErrorMessage, { exact: false });
    });
  });
});
