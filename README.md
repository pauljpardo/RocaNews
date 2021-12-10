# RocaNews

## "Ride the news"

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

## Overview

**RocaNews** is a website based on revolutionizing the way news is presented and distributed. The past 5-10 years have shown the general population how skewed and biased Legacy news networks are and it is very clear they each have a specific agenda to push onto their viewers. RocaNews is a site dedicated to providing need-to-know stories that are Non-partisan and entertaining for all readers; Going over stories based on recent news and also random interesting stories everyone can learn some history and knowledge from. 

[Deployed Site](link here)

<br>

## MVP

The **RocaNews** MVP will allow a user to delve into different news stories and be able to create/read/update/delete comments pertaining to the stories and interact with one another. 

<br>

### Goals

- Users will be able to fetch the full list of news articles with many different kinds to choose from.
- Users will be able to view all comments for a story. 
- Users will be able to create/edit/and delete comments. 

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React            | _A JavaScript library that is used for building front end interfaces_ |
| React Router     | _A library used for creating routes in React_ |
| React Router DOM | _DOM functionality for React Router_ |
| Axios            | _A JavaScript library used to make HTTP requests from the backend_ |
| Node.js          | _Javascript runtime environment that runs as asynchronously aids in building scalable network applications_ |
| Ruby on Rails    | _ MVC based framework that helps create database-backend web apps _ |
| JWT              | _Used to create unique user access tokens that allow for authentication_ |
| bcrypt           | _Hashes passwords to protect user information from data leaks_ |
| [React Material UI Carousel](https://www.npmjs.com/package/react-material-ui-carousel)| _Carousel UI component for React using Material UI_ |
| [React Spinners](https://www.npmjs.com/package/react-spinners) | _Loading Spinners_ (Post MVP) |

<br>

### Client (Front End)

#### Wireframes

[Figma Wireframes](https://www.figma.com/)

Home Page
![Desktop Home](https://res.cloudinary.com/dfryxohde/image/upload/v1636326768/Server/HomeLanding_ci7uve.png)

All News Page
![All News]()

Story detail page with comment C.U.D. Buttons
![Story detail]()

Create / Read/ Update / Delete Comment
![C.R.U.D. comments]()

Edit Comment pop up
![Edit Comment](https://res.cloudinary.com/dfryxohde/image/upload/v1636326768/Server/EditComment_eehzim.png)


#### Component Tree

[Component Tree](https://whimsical.com/server-PkfKKuwW5eojFuaNYCLNZJ)

![Component Tree](https://res.cloudinary.com/dfryxohde/image/upload/v1636327533/Server/component_tree_hrd87d.png)

#### Component Architecture

``` structure

src
|__ layouts/
      |__ Layout/
            |__ Layout.jsx
            |__ Layout.css
|__ components/
      |__ Footer/
            |__ Footer.jsx
            |__ Footer.css
      |__ Nav/
            |__ Nav.jsx
            |__ Nav.css
|__ containers/
      |__ MainContainer/
            |__ MainContainer.jsx
|__ screens/
      |__ AllNews/
            |__ AllNews.jsx
            |__ AllNews.css
      |__ StoryDetail/
            |__ StoryDetail.jsx
            |__ StoryDetail.css
      |__ EditComment/
            |__ EditComment.jsx
            |__ EditComment.css
      |__ Home/
            |__ Home.jsx
            |__ Home.css
|__ services/
      |__ api-config.js
      |__ comments.js
      |__ news.js
|__ App.js
|__ Index.js

```

#### Time Estimates

| Task                            | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------- | :------: | :------------: | :-----------: | :---------: |
| ReadMe Creation       |    H     |     2 hrs      |     1.20 hr/min    |   -   |
| Back End Creation / Plan       |    H     |     3 hrs      |     -    |   -   |
| Back End Database               |    H     |     3 hrs      |     -      |    -     |
| Seed and Create Data            |    H     |     3 hrs     |     -       |    -      |
| Test Back End Routes            |    H     |     1 hrs      |     -    |    -   |
| React File Structure            |    H     |     3 hrs      |     -     |    -   |
| Front End Setup        |    H     |     3 hrs      |     -    |    -   |
| Front End Routes and Testing    |    H     |     4 hrs      |     -      |    -     |
| Layout Setup                    |    H     |     3 hrs      |     -       |    -      |
| Navbar                          |    H     |     1 hrs      |     -     |    -    |
| Footer                          |    H     |     1 hrs      |     -    |    -   |
| Home Screen Functionality       |    H     |     4 hrs     |     -       |    -      |
| All News (GET) Screen Functionality   |    H     |     4 hrs     |     -       |    -      |
| Story Details Screen with C.U.D. Btns    |    H     |     4 hrs      |     -      |    -     |
| Get, Edit, and Delete Comments Functionality |    H     |     3 hrs      |     -      |    -     |
| Hamburger on Nav (tablet/mobile)|    H     |     1 hrs      |     -       |    -      |
| Edit Comments Pop up Screen     |    H     |     1 hrs      |     -    |    -   |
| Home Screen CSS                 |    H     |     2 hrs      |     -      |    -     |
| All News Screen CSS               |    H     |     3 hrs      |     -      |    -     |
| Story Details Screen CSS               |    H     |     3 hrs      |     -    |    -   |
| Edit Comment Pop up CSS            |    H     |     1 hrs      |     -     |    -    |
| TOTAL                           |          |     48 hrs     | - | - |

<br>

### Server (Back End)

#### ERD Model

![ERD]()
<br>

***

## Post-MVP

- _Implement Authorization_
- _Users will be able to create account_
- _Users will be able to like comments and posts_
- _Timestamps to comments_
- _User avatars next to username_
- _Create My Profile page where user can view their liked articles_
- _Loading Screen animations_

***

## Code Showcase

```
console.log(test)
```
The speaker, COBB, is 35, handsome, tailored. A young
Japanese man, SAITO, eats as he listens.
COBB
A bacteria? A virus?
Cobb gestures at their feast with his wine glassCOBB
An intestinal worm?
Saito’s fork pauses, mid-air. Cobb GRINS. A third man is at
the table- ARTHUR. He jumps in to save the pitch

```
console.log(test)
```
ARTHUR
What Mr. Cobb is trying to sayCOBB
An idea.
Saito looks at Cobb, curious.
2.
COBB
Resilient, highly contagious. Once
an idea’s taken hold in the brain
it’s almost impossible to
eradicate. 
```
console.log(test)
```
A person can cover it
up, ignore it- but it stays there.
SAITO
But surely-to forget...?
COBB
Information, yes. But an idea?
Fully formed, understood? That
sticks...

## Code Issues & Resolutions

SAITO
For someone like you to steal?
ARTHUR
Yes. In the dream state, conscious
defenses are lowered and your
thoughts become vulnerable to
theft. It’s called extraction.

``` 
console.log(test)
```
