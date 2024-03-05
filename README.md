## Installation

### Clone the Repository

```bash
git clone https://github.com/DaveP80/frontend-takehome-challenge.git
```

### Install Dependencies

```bash
cd frontend-takehome-challenge
npm install
```

### Add Api Environment variable

```bash
REACT_APP_URL=<url>
```

## Usage

### Start the Frontend

```bash
npm run start
```

## Developer Plan

| Requirement                       | Plan                                                                                                 |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Display users                     | Fetch all in App.js                                                                                  |
| Testing                           | Add another mock data object for when API is slow                                                    |
| Expand Collapse All               | Add buttons with state                                                                               |
| Expand Collapse individual card   | Add state logic to User.js file                                                                      |
| add filter eventHandler in App.js | eventHandler is passed to FilterBar where event.target.value is read.                                |
| implement filter logic            | Only need one state to keep track of which hobbies would be enabled                                  |
| correctly show filtered users     | keep two const variables to keep track of which hobbies are enabled and the final filtered user list |
