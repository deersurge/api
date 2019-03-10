# api

url: https://api.deersurge.io
sandbox: https://deersurge-api.herokuapp.com/

## usage 
```json
// https://deersurge-api.herokuapp.com/

{
  "source": "https://github.com/deersurge/deersurge-api",
  "usage": {
    "signup": {
      "endpoint": "https://deersurge-api.herokuapp.com/signup",
      "method": "post",
      "body": {
        "email": "email@sample.com",
        "password": "string"
      },
      "response": {
        "success": "signup",
        "token": "JWTTOKENpLeKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzg0NzJiYzMxNSAMPLEwMWUwMDYyNzkiLCJpYXQiOjE1NTIxODM5OTcwMjB9.p93OK9SampleCszqQ2v8I9UeaoMFnD0kI9uL4QwJwt"
      }
    },
    "signin": {
      "endpoint": "https://deersurge-api.herokuapp.com/signin",
      "method": "post",
      "body": {
        "email": "email@sample.com",
        "password": "string"
      },
      "response": {
        "success": "signin",
        "token": "JWTTOKENpLeKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzg0NzJiYzMxNSAMPLEwMWUwMDYyNzkiLCJpYXQiOjE1NTIxODM5OTcwMjB9.p93OK9SampleCszqQ2v8I9UeaoMFnD0kI9uL4QwJwt"
      }
    },
    "get user profile": {
      "endpoint": "https://deersurge-api.herokuapp.com/api/userProfile",
      "method": "post",
      "header": {
        "Authorization": "JWTTOKENpLeKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzg0NzJiYzMxNSAMPLEwMWUwMDYyNzkiLCJpYXQiOjE1NTIxODM5OTcwMjB9.p93OK9SampleCszqQ2v8I9UeaoMFnD0kI9uL4QwJwt"
      },
      "response": {
        "_id": "5c82041833fa02baa7dsample",
        "email": "email@sample.com",
        "__v": 0,
        "phone": {
          "verified": false
        },
        "emailVerified": false
      }
    }
  }
}
```
