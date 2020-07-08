# Roadtrippers

This project was developed as part of General Assembly's Software Engineering Immersive. This project is a full-stack web application that was completed in a group of 3 over 8 days. Some additional bugs were fixed after the project was handed in.

Please be aware there may be a delay in the initial loading of the website, this is because Heroku puts the dyno running our application to sleep when there is no traffic. 

## Brief

Road Trippers is a social media site where users can create an account to share road trips with photos as well as give each other recommendations and send messages.

## Technologies Used

* Node.js
* MongoDB
* Mongoose
* React.js
* JavaScript(ES6) / HTML5
* SCSS
* Express.js
* Yarn package manager
* Axios
* Json Web Tokens
* Git
* GitHub
* Heroku

## Process

* We decided to go for a feature heavy approach, aspiring to implement interactive maps, picture tags, messaging, recommendation etc. We wanted to be ambitious at the start of the project, as we know as long as MVP had been reached by the due date any features that were not completed could be cut from the project. We achieved most of what we originally set out to do, though one big feature we would have liked to implement would have been a news feed and we did not have time for this.

* For styling, we decided not to use a framework, and instead used SCSS along with some packages to solve some of our bigger styling tasks, such as React Responsive Carousel to display the images and React Burger Menu for the sidebar navigation. We decided to use a bold, rugged colour palette on the project using the Yukon 1000 (https://www.yukon1000.org/) site for inspiration.

* We made a priority list for the features we wanted to implement, and each took ownership of the features we were most interested in. While it would have been better to collaboratively work on the features together in order to best share knowledge, we were concious of how little time we had to effectively deploy our goal site. We also had a deadline in mind to freeze any features that were not completed in time, so that we would still have a day to work on styling, seeds files and any remaining bugs.

* I worked on the back end, making the models and routes and testing them using Insomnia. On the front end I worked on implementing the messaging and the recommendations, as well as the search bar on the show page, and made some of the components (eg show page).

##### Examples

The home page shows our colour scheme and off-centre style:

![home page](assets/home-page.png)

Users can search trips by location or by tags:

![search](assets/search-bar.png)

The trips page displays photos, information about the trip and an interactive map:

![trip page](assets/trip-show-page.png)

An example of the recommendations that users can leave on each others trips:

![example of recommendations](assets/recommendations-example.png)

Users can have their own profile page displaying photos, which also links to their messages:

![profile page](assets/profile-page.png)

An example of the messaging feature:

![example of messages](assets/messaging-example.png)

## Key Learnings

This project was a great opportunity to learn how to work on a large project with other people, and manage the challenges that is came with. 

One of these challanges was version control, this was the first time for the class that we were in a group situation where this issue came up and we had to learn and adapt quickly. We used a development branch off the master branch in order to keep our work while the project was still being worked on, and used our own branches for the specific features we were working on, merging into the development branch regularly. Any merge conflicts were dealt with as a team if we did not know which version should be kept.

We all managed to work well together, and could effectively communicate when it came to asking for help and dividing up work.

## Challenges and Wins

Implementing the messaging feature was the biggest challenge I had during this project. I went through multiple iterations of the back end model until I designed one that met the requirements we had for the feature - with an overarching conversation model and individual messages attached to it. Then it was also challenging getting the conversations to work on the front end with the additional styling based on who is viewing the conversation (the sender or receiver of the messages).

Working on this project really solidified my understanding of the relationship between the front end and back end, making the models on the back end and then populating the information on the front end. I feel like I have gained a better overall understanding on how to make a full stack application.

## Future Improvements

* The ability to search for users by username and trip preferences
* News feed where people can share posts about the trips they are on.
* Images and maps in the recommendations.

## Deployment

This project was deployed using Heroku:
https://road-trip-ga.herokuapp.com/
