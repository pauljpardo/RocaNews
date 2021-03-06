# RocaNews

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

[https://rocanews.netlify.app/]

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
| [React Material UI Carousel](https://www.npmjs.com/package/react-material-ui-carousel)| _Carousel UI component for React using Material UI_ |
| Post MVP              | Following are specifically post MVP |
| JWT              | _Used to create unique user access tokens that allow for authentication_ |
| bcrypt           | _Hashes passwords to protect user information from data leaks_ |
| [React Spinners](https://www.npmjs.com/package/react-spinners) | _Loading Spinners_ |

<br>

### Client (Front End)

#### Wireframes

[Figma Wireframes](https://www.figma.com/file/6bbfARpNzEETnfZoa5Xa6I/RocaNews?node-id=0%3A1)

Home Page
![Desktop Home](https://user-images.githubusercontent.com/68570980/145633354-61118076-f19f-4088-a72d-28f764ede257.png)

All News Page
![All News](https://user-images.githubusercontent.com/68570980/145633804-03075af0-df8e-4bf4-a605-56b15181dc10.png)


Story detail page with comment C.U.D. Buttons
![Story detail](https://user-images.githubusercontent.com/68570980/145634617-190c9122-caef-4b87-b2a5-c67a21092e76.png)


#### Component Tree

[Component Tree](https://whimsical.com/component-hierarchy-rocanews-RUWVqDxhkvxta633WYL8T2)

![Component Tree](https://user-images.githubusercontent.com/68570980/145638423-f8b55cb6-f1fe-4e3b-b2f6-00cd02e2fd4d.png)


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
                |__ NewsCard.jsx
            |__ AllNews.css
      |__ StoryDetail/
            |__ StoryDetail.jsx
            |__ StoryDetail.css
               |__ EditComment.jsx
               |__ EditComment.css
               |__ CreateComment.jsx
               |__ DeleteComment.jsx
               |__ Carousel.jsx
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

| Task                            | Priority | Estimated Time | Time Invested | 
| ------------------------------- | :------: | :------------: | :-----------: | 
| ReadMe Creation       |    H     |     2 hrs      |     1.5 hrs    | 
| Back End Creation / Plan       |    H     |     3 hrs      |     1 hr   | 
| Back End Database               |    H     |     3 hrs      |     3 hrs     |
| Seed and Create Data            |    H     |     3 hrs     |     0.5 hrs       |
| Test Back End Routes            |    H     |     1 hrs      |     0.5 hrs    |
| React File Structure            |    H     |     3 hrs      |     0.5 hrs     |
| Front End Setup        |    H     |     3 hrs      |     3 hrs    |
| Front End Routes and Testing    |    H     |     4 hrs      |     3 hrs      |
| Layout Setup                    |    H     |     3 hrs      |     2 hr       |
| Navbar  / Header                        |    H     |     1 hrs      |     1 hr     |
| Footer                          |    H     |     1 hrs      |     0    |
| Home Screen Functionality / Logic      |    H     |     2 hrs     |      2 hrs     |
| All News (GET) Screen Functionality   |    H     |     2 hrs     |       2 hrs     |
| Story Details Screen with C.U.D. Btns    |    H     |     3 hrs      |      4 hrs      |
| Get, Edit, and Delete Comments Functionality |    H     |     3 hrs      |     5 hrs     |
| Hamburger on Nav (tablet/mobile)|    H     |     1 hrs      |     0        |
| Edit Comments Pop up Screen     |    H     |     1 hrs      |     IP    |
| Home Screen CSS                 |    H     |     2 hrs      |     2 hrs      |
| All News Screen CSS               |    H     |     2 hrs      |     1 hrs      |
| Story Details Screen CSS               |    H     |     2 hrs      |     1 hrs / IP    |
| Edit Comment Pop up CSS            |    H     |     1 hrs      |     IP     |
| TOTAL                           |          |     41 hrs     | 31 hrs | 
<br>

### Server (Back End)

#### ERD Model

![ERD](https://user-images.githubusercontent.com/68570980/145644742-de5568d1-50c7-47c4-8c0b-33ec8fe478d6.png)

<br>

***

## Post-MVP

- _Implement Authorization_
- _Users will be able to create account_
- _Users will be able to like comments and posts_
- _Timestamps to comments_
- _Create My Profile page where user can view their liked articles_
- _Loading Screen animations_
- _Search bar_

***

## Code Showcase

Schema

```
create_table "comments", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.bigint "story_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["story_id"], name: "index_comments_on_story_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "img_url1"
    t.string "img_url2"
    t.string "img_url3"
    t.string "img_url4"
    t.string "img_url5"
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "stories"
end
```
One to Many Table Relationship

```
class Story < ApplicationRecord
  has_many :comments, dependent: :destroy
end

class Comment < ApplicationRecord
  belongs_to :story
end
```

Create / Update / Delete handlers

```
 const handleCommentCreate = async (formData) => {
    const newComment = await postComment({ ...formData, story_id: id });
    setComments((prevState) => [...prevState, newComment]);
  };

  const handleCommentEdit = async (formData, commentId) => {
    const newComment = await putComment(formData, commentId);
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === commentId ? newComment : comment;
      })
    );
    setIsEditing(false);
  };

  const handleCommentDelete = async (id) => {
    await deleteComment(id);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id)
    );
  };
  
```
