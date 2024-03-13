| Functional Requirement and Subfeatures                                        | Build                                              | Test                                                                                           |
|-------------------------------------------------------------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------|
| **1. Fetching the list of users**                                             |                                                    |                                                                                                |
| - Fetch data from the provided external API                                   | Implement `fetch` response                        | - When checking frontend, data is confirmed to have been fetched.|
| - Show loading state while the API call is in progress                        | Set loading state to true at start of fetch       | - Page briefly displays "One Second..." to confirm loading.|
| - Show error state if the API call returns an error response or if any other error occurs while fetching data. Display the error message returned by the API.| - Implement error state | - Error message is displayed on page when error occurs|
| - Display the list of users | - Display users fetched from API, Users prop is passed down properly to render the list of users.| List of users is displayed when page is loaded.|
| **2. Expand / Collapse user information**                                     | - Create button and function to toggle visibility of 'about' paragraph for a user. | - Clicking button toggles the 'about' paragraph for a user.|
| - Implement a button that toggles visibility of the `about` paragraph for a user. | create a button to handle the toggle feature along with useState | When clicking show details, user details show and the button is then changed to hide details.|
| - Implement `Expand All` button to expand all cards| create a function and button to handle `expandAll`|- Clicking the button expands all user cards (can still collapse individual users). |
| - Implement `Collapse All` button to collapse all cards |  create a function and button to handle `collapseAll`|- Clicking the button collapses all user cards (can still expand individual users). |
| **3. Filter by hobbies**                                                      |                                                    |
| - Add hobbies to user object and display below 'Company' section | Hobbies are displayed as a list under 'Company' section. | - In the user's info, their list of hobbies are shown| 
| - Generate hobby filter buttons dynamically | Map through hobbies and create buttons for each as an onClick event| - All hobby buttons appear on the page.|
| - Implement two states for hobby filter buttons: selected or not selected. |selectedHobbies is an empty array created in `app.js` where when hobby is clicked, its pushed to the list of selectedHobbies,  in `filter.js` selectedHobbies is called and when the function is used(by clicking a button), the hobby is added to the list and the button turns blue( due to css)| Users can see when clicking a hobby button, it highlights blue to confirm it was selected|
| - Filter users based on selected hobbies and display matching users. |reduce the hobbies array to remove duplicates, and for each hobby that isnt in the new array, push it , this returns the list of hobbies.| when a hobby is clicked, the list of users changes based on the hobbies selected. Only users will *ALL* hobbies will appesr on the list| 
| - Display message if no users match selected filters.| Since the users need to have every hobby selected, in the case there are no , matching users, the page will say there are no matching users with selectedHobbies.| Choosing a bunch of hobbies will eventually show the message with there being no matches to the selectedHobbies.|