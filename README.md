# LIST FETCHING APP

---

## SUMMARY

The app fetches the data from API and then presents it in a form of a table.

Initial company data lacks the detailed information about the company income, thus for each entry there is a separate request made to the API with a goal to fetch this detailed data.

To resolve the problem with CORS, I implemented a simple cors-anywhere NodeJS app. Initialy I used cors-anywhere.heroku.com but with each app refresh, there was too many request made for the app - that is why I decided to proxy the requests via separate nodejs app.

Initialy, I wanted to request the detailed information only for the items present on a given table page, but (from the UX point of view) it would take quite some time each and every time the user would change the active page of the table to get this data.

That is why I decided to fetch all of the information once at the beginning, provide the user with a loading spinner and after successful fetch the user can filter and access all of the table pages instantly.

---

## FEATURES

- filtering all the possible fields by text from an form input
- sorting each column in descending or ascending order
- pagination of the table data

---

## TECHNOLOGIES USED

- React with TypeScript
- Redux for app state management
- Axios for requests
- cors-anywhere for resolving the issue with CORS
- GSAP for simple animations
- Moment for working with time data
- styled-components for styling the DOM elements

---

## INSTRUCTION

To run the project:

- copy the repository
- run `npm install`
- run `npm run dev`

It should start the CORS NodeJS app and the React app as well.

The app is accessible at localhost:3000
