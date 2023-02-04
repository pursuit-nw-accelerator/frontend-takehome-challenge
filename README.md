# Users app practice assessment

## Getting started and submitting
1. Fork and clone this repo
1. run `npm install` to install, then `npm start` to start.
1. Implement the requirements below.
1. Submit your work as a pull request to the upstream (a PR against this repo).

## Requirements
1. Submit your project as a pull request to this repo.
1. Include a README in the root of your project that explains how to run the project locally. The new README should replace the existing README doc (which you are reading now).
1. Fetch the data from the external API: https://users-app-backend.onrender.com/users You may use `fetch`, `axios` (already installed), or something else.
1. Show a loading state while the API call is in progress.
1. Show an error state if the API call returns an error response, or if any other error occurs while fetching data. You **must** display the error message. Do not replace the error message with hard-coded text.
You can expect that the API returns error responses with the json: `{ error: 'some error message' }`
1. Display the list of users. Many of the components you need for this are already in this repo.
1. Implement the `SearchBar` functionality. When the user types in the search bar, show only the users whose name, country, or company match the user input.
1. Display `No results for {input}` when there are no search results.
1. Implement a button that shows / hides the `about` paragraph for a user.
1. Implement an `Expand All` button that, when clicked, expands all the cards regardless of their current state.
1. Implement a `Collapse All` button that, when clicked, collapses all the cards regardless of their current state.
1. Users should be able to expand or collapse individual cards evern after `Expand All` and `Collapse All` have been clicked.
1. Demonstrate correct understanding of how to lift state up. This means that you **must not** change the component tree. Do not move or remove components, or change any parent-child relationships. However, you **can** (and will have to) add or change props or state in the existing components. You can create new components for loading, error, no results, or to handle layouts and styling.
1. The error / loading / no results states should be styled in a way that goes well with the rest of the styling in the app.
1. The styling should not look terrible when the viewport is narrower than 400px. This means that no content should be spilling over the borders, for example. You may need to use media queries to implement this.
1. Do not make any other major styling changes or add any fancy styling for its own sake.
1. There should be no errors or warnings in the console or in the terminal.
1. There should be no commented-out code in your repo.
1. Your code should be clear and easy to read.
1. Your commit history should be clear and organized: one commit per feature, with a clearly written commit message.
1. Do **not** implement additional features that are not part of the requirements (for example, detail pages, routing, favoriting, sorting, deployment, etc). Stick to the requirements and make sure they are properly and correctly implemented.

![finished app for reference](./users-app-completed.png)

## Communication and planning
The deadline is **5 pm, Friday, August 25**. Submitting late without communicating with me **at least 24 hours before the deadline** is not acceptable.

Treat this like a real takehome interview:
- submit your very best work by the deadline
- do not submit work that you know is incomplete and/or does not meet all of the requirements above
- be 100% certain that your code on GitHub is exactly the same as the code you are running on your computer
- take some time **right now** to understand the requirements
    - if anything is unclear, post in the class channel **ASAP**
- estimate how long it will take you to complete each requirement
- look at your schedule and **actually book time** to build each part of the application
- if you realize you won't have time to submit by the deadline, send me a Slack DM **ASAP**
- if something comes up in your life that means you can't submit on time, send me a Slack DM **ASAP**
- if you hit an unexpected bug or technical snag while working on the project, post a question in the Slack channel **ASAP**

