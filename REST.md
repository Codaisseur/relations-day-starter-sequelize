### REST - REpresentational State Transfer

1. Operations as HTTP methods
2. Respond with appropiate status codes
3. Clean urls.

Endpoint => Method + url

## 1. Operations as HTTP methods

HTTP Methods:
GET PUT DELETE POST PATCH

CRUD => Create Read Delete Update  
 POST GET DELETE PUT & PATCH

Read users data:
app.get('/users');
app.post('/users');

# 2. Respond with appropriate status codes:

200.. Success Ok
300.. Redirect Not here
400.. User/client error you screwed up
500.. Server errors I screwed up

200 - OK

400 - Bad request
401 - Unauthorized
404 - Not found

500 - Server Error

# 3. Clean urls

1.  GET - '/fetchUsers'
    POST - '/createUser'
    GET - '/userWithLists'
    GET - '/allLists'

2.  GET - '/users'
    POST - '/users'
    GET = '/users/:id'
    PATCH - '/users/:id'

RPC - Remote Procedure Call
POST - '/sendEmail'

GET - '/lists'
