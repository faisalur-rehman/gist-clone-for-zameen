# Framework: REACT

The app has 2 components 1-App.js 2-RepoDetails.js

#App.js: This component renders the form and RepoDetails.js component. Form is used to get username. App.js is responsible for receiving all the data from fetchData.js file residing in the services folder. fetchData.js file fetches the data using github api once the name has been entered. Once the data is reveived, it is sent to RepoDetails component via a prop.

#RepoDetails: This component renders the data received from the App.js component in the form of table( using flex or grid was no big deal but there was no point of using either ). It shows all the ID's of a searched user's public gists with an icon depending upon the language and the 3 latest users who forked that gist.

#react-icons External library to display an icon depending upon the language used within that file

#BestPractices were used in this assignment. ES6 Syntax,

Async Await,

Hooks,

Clean and Well Formated Code,

Modular Approach

Folder Structure

#Improvements: this simple app can be improved alot.

1- Showing the content ( it was part of assignment but i didn't implement it because i was unable to understand what do you mean when you say display content of a file when there could be many files in a gist)

2- Add new features like comment on a gist

3- File Badges can be improved

4- Deisgn could be made better for better user interaction.
