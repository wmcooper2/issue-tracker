# Progress
Times are in minutes

## June

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
10 - read up on CORS again and set it up on my API server

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
