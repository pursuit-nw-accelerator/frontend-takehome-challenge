# Users app practice assessment

## TSHERING GURUNG


### Instructions to Run the Server Locally

1. Clone the repository.
2. Install dependencies by running -- `npm install`
3. Create `.env` file.
4. Add `REACT_APP_API_URL=https://users-app-backend.onrender.com` in `.env`
5. Start the server by running -- `npm start`
6. The server should now be running locally.

## Markdown Table


| Comment                                                         | How I fixed it                                                |
|-----------------------------------------------------------------|--------------------------------------------------------------|
| 1. filter by hobbies                                            | - Removed useEffect and state, filtered users with a ternary |
|    If no results match the selected filters, the app should     |   based on a variable. Used ternary to render users if      |
|    display No results for {comma separated list of              |   filtered users length is true, else "no match found with  |
|    selected filters}                                            |   selected hobbies".                                         |
|                                                                 |                                                              |
| 2. README                                                       | - Updated README with instructions on how to add .env file.  |
|    "Instructions for the environment variable are missing"       |                                                              |
|                                                                 |                                                              |
| 3. No fancy styling for its own sake                            | - Removed styling for "Expand All" and "Collapse All".       |
|    "Some hover styling was added to the Expand All / Collapse All|   Buttons as it appeared inconsistently.                    |
|    buttons, but it appears inconsistently"                      |                                                              |
|                                                                 |                                                              |
| 4. Lifting state up                                             | - Changed filteredUser state to a variable, removed         |
|    "There are some issues here but the components were not      |   useEffect used for filtering users.                        |
|    moved around"                                                |                                                              |
|                                                                 |                                                              |
| 5. No errors or warnings in console                            | - Resolved eslint warnings, no warnings present now.        |
|    "There are eslint warnings in the terminal when I run npm    |                                                              |
|    start"                                                       |                                                              |




| Requirement                      | How I'll Test It             | How I'll Build It                                      |
|----------------------------------|------------------------------|--------------------------------------------------------|
| Fetch data                       | 1. Refresh page              | 1. Created state "user" array                          |
|                                  | 2. Should see users          | 2. Used async await fetch()                             |
|                                  |                              | 3. Set user data using setUser()                        |
|                                  |                              | 4. Passed "user" as a prop to render users             |
| Loading state                    | 1. Throttle to 3G speed      | 1. Created state "loading" false                       |
|                                  |   in dev tools               | 2. Inside fetch request, setLoading to false            |
|                                  | 2. Refresh page              | 3. Set loading to true after response is OK             |
|                                  | 3. Should see error message | 4. Conditional rendering based on loading state         |
| Error state                      | 1. Add ?error=what to URL    | 1. Created state "error"                                |
| (NOT WORKING)                    | 2. Refresh page              | 2. Set error message in catch block when try fails       |
|                                  | 3. Should see error message  |                                                          |
| See more and See less            | 1. Click on see more to expand| 1. Created toggle state array in parent component       |
|                                  | 2. Click on see less to      | 2. Built handleToggle function in parent component       |
|                                  |    collapse                  | 3. Passed toggle and handleToggle to child component    |
|                                  |                              | 4. Received "user" as prop in child component           |
|                                  |                              | 5. Added onClick attribute to button, calling handleToggle|
|                                  |                              | 6. Used ternary for conditional rendering based on toggle|
| Expand All & Collapse All        | 1. Click on Expand to see all| 1. Created handleByExpand function to expand all cards  |
|                                  |    the cards                 | 2. Created handleByCollapse function to collapse all    |
|                                  | 2. Click on Collapse all to  |    cards                                                 |
|                                  |    see all the cards collaps | 3. Passed functions to FilterBar component              |
|                                  |                              | 4. Created buttons for expand all and collapse all      |
|                                  |                              | 5. Added onClick attribute to call handleByExpand and   |
|                                  |                              |    handleByCollapse                                     |
| Filter by hobbies                | 1. Click on hobbies button   | 1. Created selectedHobby state in App.js               |
|                                  |                              | 2. Created handleFilterBtnClick function to add hobbies |
|                                  |                              | 3. filtered users based on wheather every selectedhobbies |
|                                  |                              |    are in each user bobbies array.                      |
|                                  |                              | 4. Passed selectedHobby and handleFilterBtnClick to     |
|                                  |                              |    FilterBar component                                  |
|                                  |                              | 
|                                  |                              |   
|                                  |                              | 5. Received selectedHobby and handleFilterBtnClick as   |
|                                  |                              |    props in FilterBar component                         |
|                                  |                              | 6. onClick event calls handleFilterBtnClick             |
|                                  |                              | 7. if no match is found then "no match found with       |
|                                  |                              |    selected hobbies" is rendered. 

