## SMS ( Student management system ) :tada: :rocket:

Student management system written in Java ( Spring Boot ) with React , this repo was created while learning SpringBoot

## Technologies used :muscle:
- [x] SpringBoot 
- [x] React
- [x] Postgres
- [x] Others -> Maven , Docker , AntD UI framework

## Frontend

The frontend is very simple , it just displays student details on the browser

## Backend Implementation

The Following the API endpoints implemented

- [x] **/students**
    - [x] **METHOD** : GET , fetches the list of students from the DB
    - [x] **METHOD** : POST , adds a new student into the database
    - [x] Also custom exception handlers are implemented on the server side , for better experience
- [x]  **/students/{studentId}/courses**
    - [x] **METHOD** : GET , fetches all the information related to courses that the student is enrolled in

```
Example : http://localhost:5000/students/
  [
      {
          "studentId": "87acd189-1fa5-4c4c-adf8-e753643f5242",
          "firstName": "Wandie",
          "lastName": "Wigsell",
          "email": "wwigsell19@google.com.hk",
          "gender": "FEMALE"
      },
      {
          "studentId": "435de024-25ff-4a48-a80a-644dadf01bb9",
          "firstName": "Marion",
          "lastName": "Winscom",
          "email": "mwinscom1d@over-blog.com",
          "gender": "MALE"
      }
  ]

Example : http://localhost:5000/api/students/87acd189-1fa5-4c4c-adf8-e753643f5242/courses
  [
    {
    "studentId": "87acd189-1fa5-4c4c-adf8-e753643f5242",
    "courseId": "4ce7aa2d-4c9a-4a0c-a92b-1ecc6fabd124",
    "name": "DB intro",
    "description": "Intro to modern databases",
    "department": "Computer Science",
    "teacherName": null,
    "startDate": "2021-04-03",
    "endDate": "2022-04-03",
    "grade": null
     }
  ]

```