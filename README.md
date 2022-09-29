# HeroMax Server

<p>
   Hello guys! This is my first server. I created for my application, HeroMax. It's a movie platform that centralizes hero movies, it works like a Netflix, but only for Heroes.
</p>

# Entities

-   User:

    -   Id
    -   Name
    -   Email
    -   Password
    -   Phone Number
    -   Avatar

-   Movies:

    -   Id
    -   Title
    -   Category
    -   Banner
    -   Description

-   Routes:
    -   Register: POST /api/register
    -   Login: \* /api/login
    -   Logout: \* /api/logout
    -   Movies: GET /api/movies
    -   Movies: GET /api/movies/movie?id=_&name=_
    -   Category: GET /api/category/movies/
    -   Movie Category: GET /api/category/movies/movie?id=_&name=_
