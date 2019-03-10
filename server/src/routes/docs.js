
const uri =  'https://deersurge-api.herokuapp.com';

export default {
  'source': 'https://github.com/deersurge/deersurge-api',
  'usage': {
    'signup': {
      'endpoint': `${uri}/signup`,
      'method': 'post',
      'body': {
        "email": "email@sample.com",
        "password": "string"
      },
      'response': {
        "success": 'signup',
        "token": "JWTTOKENpLeKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzg0NzJiYzMxNSAMPLEwMWUwMDYyNzkiLCJpYXQiOjE1NTIxODM5OTcwMjB9.p93OK9SampleCszqQ2v8I9UeaoMFnD0kI9uL4QwJwt"
      }
    },
    'signin': {
      'endpoint': `${uri}/signin`,
      'method': 'post',
      'body': {
        "email": "email@sample.com",
        "password": "string"
      },
      'response': {
        "success": 'signin',
        "token": "JWTTOKENpLeKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzg0NzJiYzMxNSAMPLEwMWUwMDYyNzkiLCJpYXQiOjE1NTIxODM5OTcwMjB9.p93OK9SampleCszqQ2v8I9UeaoMFnD0kI9uL4QwJwt"
      }
    },
    'get user profile': {
      'endpoint': `${uri}/api/userProfile`,
      'method': 'post',
      'header': {
        "Authorization": "JWTTOKENpLeKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yzg0NzJiYzMxNSAMPLEwMWUwMDYyNzkiLCJpYXQiOjE1NTIxODM5OTcwMjB9.p93OK9SampleCszqQ2v8I9UeaoMFnD0kI9uL4QwJwt"
      },
      'response': {
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