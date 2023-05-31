# JOBxplore

## Deployed Link: 
https://jobxplore-nandinip10.onrender.com/

## Setup to run the app locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```

- visit url http://localhost:3000/

## About the app
JOBxplore- A Job Tracking Application that will keep track of one's progress during the job search process. 
1. Consists of a STATS page where 
  - user can see pending applications where the 
  - user can see interviews that have been scheduled 
  - user can see job applications that have been declined
2. Chart (in the form of bar and area) that showcases applications sent out in past 6 months.
3. Conists of an ALL JOBS page that displays all jobs the user has applied to.
  - This list of jobs are retrieved in a paginated manner (with a limit of 10 jobs per page)
4. User can Add, edit and delete jobs according to his/her preference.
5. User profile can be updated
6. A unique feature of Demo App (With just read only) with which any website visitor can view the application without registering/ logging in, but with the restrictions as follows:
  - In a Demo App, the viewer cannot update the user profile.
  - In the Demo App, the viewer cannot edit/ delete/ add jobs.
  - The main purpose of Demo App is to familiarize one with the functionalities involveed in the JOBxplore Application.
7. Error Page is displayed when the path does not exists.
