import { render } from "@testing-library/react";
import FilterBar from "./FilterBar";

const mockUsers = [
  {
    id: 1,
    age: 35,
    name: "Teddie Doodle",
    company: "BUZZWORKS",
    country: "Greenland",
    photo: "https://randomuser.me/api/portraits/lego/0.jpg",
    about:
      "Hi there! I'm Teddie Doodle, a 35-year-old from Greenland. I work at BUZZWORKS, where I'm passionate about what I do and always strive to exceed expectations. In my free time, I love to spend time with my loved ones and take on new adventures. I'm excited to see what the future holds and what opportunities lie ahead.",
    hobbies: ["yoga", "board games", "video games", "tennis"],
  },
  {
    id: 2,
    age: 29,
    name: "Peter Parker",
    company: "Stark Industries",
    country: "Romania",
    photo: "https://randomuser.me/api/portraits/lego/1.jpg",
    about:
      "Peter is an intern at Stark Industries. His favorite borough is Queens",
    hobbies: ["golf", "cooking", "podcasts", "painting"],
  },
  // add more mock data here...
];

const mockHobbies = ["yoga", "board games", "video games", "tennis"];

const mockSelectedHobbies = ["reading", "dancing"];

describe("<FilterBar />", () => {
  it("renders hobby buttons based on provided users and selected filters", () => {
    const setHobbies = jest.fn();
    const setSelectedHobbies = jest.fn();

    const { getByText } = render(
      <FilterBar
        users={mockUsers}
        hobbies={mockHobbies}
        setHobbies={setHobbies}
        selectedHobbies={mockSelectedHobbies}
        setSelectedHobbies={setSelectedHobbies}
      />
    );
    mockHobbies.forEach((hobby) => {
      expect(getByText(hobby)).toBeInTheDocument();
    });
  });
});
