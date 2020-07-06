# Progress
Times are in minutes


## July
### 6th
120 - Added state hooks for each form field in AddIssue3 component, got the state to work properly, figured out how to use fetch to send the data to the endpoint, got the app to redirect to the homepage without clearing the redux store which allowed the selected project to remain the same, and now there is a slight issue of the form not being connected to the DOM or something. I have to figure that one out next, then run dispatch() to update the store from the API with the newly added issue. I added res.end() in the server file, too.


### 5th
180 - With a lot of distractions (my actual time is probably closer to 60 if you take away all the nagging from my wife while I try to work) I was able to get the database and endpoints to work together with the app to save, update, and display the correct issues for each project. However, the app returns to the default project (IssueTracker) when you add an issue or edit one. The issues stay in the same spot, but I would like to get the project to stay the same after a change is made through add/edit issue forms.  
60 - I think I figured out what to do to keep the app from defaulting on redirect to the home page. I need to handle the redirect within the app itself (React Router) and not rely on the server to handle that (Express Router). I need to change how the form is submitted and make a function that uses fetch to post to the endpoint, then use the app's router to redirect to the home page so that the Redux store is not changed back to the default state (which happens when the server file redirects you to the home page).  


### 4th
Did nothing on the app today. I was busy organizing my apartment to make space for my baby in the next couple of months.  


### 3rd
120 - refactored the server app, to put the database logic into its own module for simple-survey-v2 and issue-tracker. Now the file is much easier to read. I will put the endpoints that remain in the server file into their own router file later.  


### 2nd
20 - Reverted the changes I made to try and add the project menu's functionality to the endpoints. I need to rethink how I am going to work those in to the existing setup. I think that I should first refactor the existing server code to make it simpler to understand (to help keep my eyes from getting lost in the text) and then transfer the notes I've written into code. I still need to write tests for this kind of thing.  


### 1st
10 - Worked on refactoring the endpoints on the server app. Was able to get one endpoint working after that, but the issue now is incorporating the project selection into the endpoints. I will do more chores today and think about that.


## June
### 30th
Did nothing today. Chores that I put off in order to code more finally reached a point where they got in the way of my coding.  


### 29th
30 - Working on a different Lightsail instance to tinker with passing around the MongoDB through express router or the endpoint callbacks. Can't seem to work around it nicely...


### 28th
60 - I figured out what bonehead thing I was doing to cause so much trouble when refactoring the server app. I've been staying up late to try and work on this stuff and I think the lack of sleep is the most significant problem as it causes me to overlook small details. I was trying to import constants from the wrong module. I've been trying so hard to squeeze out some (uniterrupted) free time that I end up working during the worst times to try and make progress, but that ends up causing more problems as the time I do get is not quality focus-time. I was firm in my position when I asked my wife to let me concentrate today. She was a little angry (whatever... I need to focus) but after I was able to focus, I caught that stupid error.  
60 - Added some styling changes to the details component to fix the wierd alignments. Added some different default states to help with different functionality when developing on the localhost. Added a toggle ability to the priority buttons and it now updates in the Redux store. I need to work on the sort ability next for the priority buttons in the issue table component.  
30 - Added filter ability to the issue table.  
60 - After reading through the docs and trying to decide on the best way to present the projects for selection, I decided on how I want ot present the project menu and updated its stylings accordingly. Now it's functional, but I need to add an endpoint in the server with a database query to get the issues for a selected project.
20 - Changed the stylings of the Details component a little, and got the project dialog window to close after selecting a project.  
30 - I've been playing with getting the endpoints to work with the state of project selection in Redux, but it's redirecting right for some reason. I will work on this at another time. For now I will review what I know about URLs and see if the problem is in there.  
20 - Added eslint and started working on cleaning up the code, adding propTypes and will add default props too. Really need to focus on testing as the app is getting way to big to keep doing things they way I've been doing it. I know about TDD and have used it with Python a lot, but for whatever reason I have neglected it with my JavaScript code.  
__Total time so far: ~ 47.5 hours which includes reading documentation, sketching in notebook, refactoring, and many other small details...__


### 27th
60 - I spent time working on refactoring and just general clean up of the express server app as it's getting a little messy.  
180 - I didn't spend this time directly on the app. Instead I was using this time to figure out how to pass around the MongoDB while using express Router, but I couldn't figure that out on my own by reading the docs and many blogs. The blogs were not very helpful...  
30 - It took a while to find the clue to properly updating a nested filed in a document in MongoDB. [This link](https://choicetechlab.com/blog/monk-driver-mongodb-update-existing-documents/) gave me the clue. Basically, "dates.lastEdited" not "dates : { lastEdited: ... }"is what should be used within the $set object when updating a document. You have to use dot notation within a string to get the nested field.  


### 26th
Did nothing today. Need to rest after long day of teaching 2nd graders...


### 25th
60 - I'm stuck on too many styling issues with Material-ui. I think I need to dive deeper into how it works and build my understanding of it works before I continue. I've wasted a lot of time already trying different ways of getting the stylings to work and things that I don't expect are happening. This is a sign that I need to take a step back and read the documentation more.  
30 - The issue with the dates not updating properly in the server has me a little confused. I need to play with that more before I tackle it again. I feel like I'm wasting too much time with the Date objects.  
20 - This feels wierd. When I think I don't understand something it starts to work, and then I have to study it to figure out what I did... The date fields are working now (sort of). They overwrite the fields in the API's endpoint, but I think that can be solved just by adding the other fields in the object passed to the MongoDB method when updating. I will do that tomorrow. The wife is home my productivity is taking a nosedive because of the constant talking.


### 24th
60 - Dealing with interruptions every 5 to 8 minutes, I think I was able to get something done in this hour. The biggest obstacle to progress is these small interruptions (wife) because they break concentration and the "flow" that you get into. It takes a lot of effort to get back into that... I think I was able to get half way to a working solution on the dates updating properly in the details below the issues table. The date format is correct, but the times update to the point where you refresh the page, but don't update when you click the home button from the edit-issue form page (they are blank). I edited the code to try and get it to show the dates based on the saved/created times, but that's not working (...distractions) however the app does not crash anymore when clicking the home button from the edit-issue or add-issue form pages.


### 23rd
60 - working with dates in javascript is one of those things that causes headaches. I went over it in detail a year ago, but haven't used it since. I remember a lot, but there are still some quirks that escape memory. That and I need to figure out why my detail pane's datesare not calculating properly (been putting it off because dates are so wierd in javascript).  
20 - read about selection menus and added one to <AppHeader> component.  
60 - spent a while thinking about freelancing and how to make it (teaching code in English) appeal to the English teaching companies in Tokyo.  


### 22nd
30 - Fixed endpoints to not accept cors anymore as I don't need to allow it for development on my localhost (to allow access to the endpoints and the database).  
10 - Got the edit-issue endpoint working so now the issues can be updated, added an "open" field to filter out inactive issues on initialization, made input fields required for edit-issue and add-issue.  
20 - converted close issue button to checkbox in edit-issue form.  
15 - got the database to update the open status to "false" when the checkbox for closing is checked.  
20 - figured out that what I was doing in one endpoint was not updating in another endpoint. Duh... just a brainfart.  
10 - thought about what to do next, what I need to work on and added issues accordingly to the app (about the app).  
20 - It's late... too tired to make sense of why the details below the <Dashboard> component don't update on issue click.  


### 21st
30 - The wife and I went shopping for the new baby coming and I did chores all day. I did start to set the app up for putting on my AWS Lightsail instance, but without a project tile on my website so I can test out the functionality without exposing it to vistors.  
60 - Put the app up on my server and fixed the endpoints to work with the server's current setup. Redirected the user after the edit-issue and add-issue forms back to the dashboard. I need to add a confirmation page inbetween with a timeout that send the user to the dashboard. Right now, the endpoints work, the database works, the buttons work, but I need to get the dates to format properly. Later I can add a project selection menu then a way to require users to login. The project tile has not been added to my portfolio page, but the app is accessible by directly entering the url in the address bar.  


### 20th
120 - Added an edit issue form and started to differentiate between the data that is preloaded (or not) between the add-issue form and the edit-issue form. Read the docs for MongoDB to add an update ability endpoint for the edit-issue form.  


### 19th
30 - Refactored a little, didn't do much today.  


### 18th
240 - I moved the the add issue button, added a home button to the app header, put the edit button in the rows for each element, and added more color coding for the priorities and bug/feature issues in the issue table. I added some functionality on the server side by sorting the issues by time on intializing the app. Will fix the /bugs and /features endpoints to return only those issues respectively. I began to use the bug tracker to track my own progress on the app. I've been taking screen shots of the UI progress and it's coming along well.  


### 17th
180 - took the time to play with the stylings a little, shuffle around some components and refactor things. I refactored such that the components I combined were split up again because I feel like having them combined was not necessary and over-abstracted the code.  


### 16th
240 - having a really tough time trying to figure out what the heck is going on with redux's store and why the change to my store is not triggering an update in the component that uses it even though the mapStateToProps and mapDispatchToProps are there and they work fine. I'm really sure that there is no issue with my reducers. wtf.  

### 15th
180 - I wasted waaaaaaaay too much time because of a simple, stupidly small detail that I forgot. I struggled trying to figure out why I kept getting errors with undefined and trying to map through an undefined object. I was getting two different states of objects as the component's property was being updated from the default to the result from the API. The state would change and the component would update as a result, but the map function in the component would crash the app when it got undefined. Finally, I got suspicious of my understanding of the fundamentals and I remembered something. I went back to the documentation and I felt so stupid. My problem was that undefined is not the same as "undefined". I was getting two different undefined values in the console but that small detail just went right past me. I looked in my books too (the ones that I had when I was just starting out with JavaScript) and I even made a note about that in there. I feel that had I been working on a team, that if I had other people to help catch these small errors, then my progress would be faster in this regard (there are pros and cons with teams, but perhaps the team members would be helpful in finding these lapses in knowledge that form over time).    
120 - with much distraction (from my wife), I was able to get the database to delete issues through the API endpoint. Next I need to get the state to change and trigger an update on the screen to rerender the new state.  

I finally got it straightened out and the app works normally. I feel dumb.  


### 14th
120 - after a couple hours of fighting with Redux and trying to implement it in my app, I realized that I need to take a step back and try to understand it better. I will take the rest of the day to map out my understanding of Redux by diving into the docs and tutorials to try and make sense of this thing.  


### 13th 
20 - reading about passport, setting up passport in web-portfolio server.  
30 - realized I need to make a login and registration form for app to use passport well, I have a lot of distractions every day while I'm doing this at home because my wife doesn't understand or respect my desire to get a better job, so my real working time would be much less if I could work uninterrupted..., I started making a login form using material-ui.  
20 - rethought about the passport and login thing. I think its scope creep. I will ignore the login thing for now. I need to focus on the app and not over complicate it by connecting to another server for the bug api. I can use the same server I use for my web-portfolio. The collection of endpoints is growing but its still manageable.  
60 - being very distracted by my wife's TV program and nagging (because we live in a small 1K apartment in Tokyo), I refactored the Dashboard into more manageable components and started reading again on redux. The concept is easy to understand, but the vocabulary (action/reducer) is just another thing that confuses me among the many other things where the language is made by different groups of people with their own ideas about how things should be named. I think redux is not necessary for this app. I should just use the basic database functionality (CRUD) to maintain state as the only state that matters here is the bug and feature lists.  
60 - playing with material-ui and fighting distractions from my wife. Learning how to style the components in the same file rather than use traditional CSS files. Setting up the endpoints on the server to respond with data from the forms I send in for making a new bug.  
30 - got "add-bug" POST endpoint working, adds new document to MongoDB, verified that by logging into the database through the server shell, next need to get the GET "/bugs" endpoint working and loop through the results on the dashboard component page.  
10 - wife is taking a nap so I was able to get the "/bugs" GET endpoint working quickly.  
40 - was reading through the [Redux tutorial](https://redux.js.org/basics/basic-tutorial) and got things working at the most basic level, and I added some default props to the bug table.  


### 12th
90 - thinking and planning at work, reading on Redux in my React book, sketched premliminary process at a high level how the app will get data back and forth between API server, settled on preliminary data structure for bug document in MongoDB, sketched out the kinds of actions I want to use for the bugs in Redux, and outlined in my notebook how each bug will be displayed when clicking on a list item which expands a little to show some detail and will open an overlay that shows all details on another button click.  
15 - reading on passport.js and how to implement local strategy.  
10 - read up on CORS again and set it up on my API server.  


### 11th
10 - thought about simple design choices like what kind of button design, whether or not to group buttons, and how to use color to differentiate between bugs and features.    
5 - looking at material ui on smart phone during commute.    
30 - reading through material ui component docs and adding them to the wireframe.    
5 - setting up API server and testing it. Hit a snag with CORS issue. Need to read up on that. Something about "withCredentials" ...   


### 10th
75 - sketched better UI desing in notebook at work and made user stories about what the app should do.  
30 - prepared AWS Lightsail instance by moving old project out of it.  
15 - prepared new React app, set up GitHub repo for bug tracker, and made a simple wireframe.  
5 - found some articles to read tomorrow about possible libraries I want to use in this app.  


### 9th
15 - took notes about what to include in a bug tracker from online article/blog.  
15 - sketched preliminary UI in notebook and thought about data structure in MongoDB.  

