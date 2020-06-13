# Progress
Times are in minutes

## June

### 13th 
20 - reading about passport, setting up passport in web-portfolio server.
30 - realized I need to make a login and registration form for app to use passport well, I have a lot of distractions every day while I'm doing this at home because my wife doesn't understand or respect my desire to get a better job, so my real working time would be much less if I could work uninterrupted..., I started making a login form using material-ui.
20 - rethought about the passport and login thing. I think its scope creep. I will ignore the login thing for now. I need to focus on the app and not over complicate it by connecting to another server for the bug api. I can use the same server I use for my web-portfolio. The collection of endpoints is growing but its still manageable.
60 - being very distracted by my wife's TV program and nagging (because we live in a small 1K apartment in Tokyo), I refactored the Dashboard into more manageable components and started reading again on redux. The concept is easy to understand, but the vocabulary (action/reducer) is just another thing that confuses me among the many other things where the language is made by different groups of people with their own ideas about how things should be named. I think redux is not necessary for this app. I should just use the basic database functionality (CRUD) to maintain state as the only state that matters here is the bug and feature lists.
60 - playing with material-ui and fighting distractions from my wife. Learning how to style the components in the same file rather than use traditional CSS files. Setting up the endpoints on the server to respond with data from the forms I send in for making a new bug.
30 - got "add-bug" POST endpoint working, adds new document to MongoDB, verified that by logging into the database through the server shell, next need to get the GET endpoint working and loop through the results on the dashboard component page.

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
