# Front End Takehome Challenege

## Google Chart (Functions, How To Test and Build)
https://docs.google.com/spreadsheets/d/1Ti62ABfqEfRhPFP8st8eBJPUOMwomiAy7sBBiK9W8LY/edit#gid=0

## Getting started and submitting
1. Fork and clone the repo
2. run `npm install` to install, then `npm start` to start.


## How it works


### 1. Fetching Data from API and Managing State

The App.js file fetches user data from the API endpoint (https://users-app-backend.onrender.com/users). The useEffect hook is used to run fetchUsers when the component first loads. We put an empty array [] as a dependency for useEffect, which means it runs only once when the component mounts. After fetching the data, we store it in the users state variable using the useState hook. This users state holds all the user data, which we then use to display the list of users in the app.

### 2. Expand / Collapse Feature
This application includes a convenient feature to expand or collapse all user cards with just one click. In the FilterBar component, you'll find buttons labeled "Expand All" and "Collapse All". Clicking "Expand All" expands all user cards to display additional information, while clicking "Collapse All" collapses all user cards to their default state.

This feature is implemented using React state management and event handling. In the FilterBar component, two functions, expandAll and collapseAll, are defined to handle the click events on the "Expand All" and "Collapse All" buttons. When the "Expand All" button is clicked, the expandAll function is triggered. This function iterates over the original list of users, updating each user's expanded property to true. In a similar way, when the "Collapse All" button is clicked, the collapseAll function iterates over the users and sets their expanded property to false.

These functions update the state of the Users component, causing it to re-render with all user cards either expanded or collapsed based on the button clicked. Individual user cards can still be expanded or collapsed independently using the "Show More" or "Show Less" buttons on each card. This approach ensures the same  behavior across all user cards.

### 3. Clear All Feature
The "Clear All" function in the FilterBar component allows the user to reset the filter settings to their default state. When the user clicks the “Clear All" button, it triggers the clearAllHobbies function, which resets the selectedHobbies state to an empty array. This action clears all selected hobbies, removing any active filters. It also updates the filteredUsers state to the original list of users, ensuring that the user list is refreshed to its initial state. As a result, the component returns to its initial state, displaying the complete list of users without any filters applied.

### 4. Filter by hobbies

In the User.js component, the hobbies data is received as an array. We use the join() method to convert the array elements into a single string, separated by (', ') a comma. By calling hobbies.join(', '), we convert the array of hobbies into a comma-separated string, making it easier to read.

Alphabetical Order of Buttons: 
The allHobbies array is generated using Array.from(new Set()), which makes it unique by converting it to a Set. Then, .sort() is called on this array, which orders the hobbies alphabetically.

Dynamic Generation of Hobby Buttons: 
The allHobbies array is mapped over to generate hobby buttons dynamically. Each hobby is rendered as a button, and clicking on it toggles its selection state.

Selection State of Hobby Buttons: 
Each hobby button has two states: selected or unselected. This state is managed using the selectedHobbies array in the component's state. When a hobby button is clicked, it is added to or removed from this array.

Filtering Users Based on Selected Hobbies: 
The useEffect hook listens for changes in the selectedHobbies array. When the array changes, it filters the original list of users (originalUsers) based on whether each user's hobbies array includes all the selected hobbies. The filtered list of users is then updated using the setFilteredUsers function.

Displaying Text when No Users Match Filters: 
If no users match the selected filters, for example no users have all the selected hobbies, the component will display a message indicating that no users match the filters, along with the comma-separated list of selected filters.

