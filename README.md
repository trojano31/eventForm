# EventForm

## In order to run a project

- execute `git clone https://github.com/trojano31/eventForm.git` somewhere on your machine
- `cd eventForm`
- run mongoDB on port 27017. If you have docker installed simply run: `docker run -d -p 27017:27017 mongo`
- run `npm i` in root dir (it will install packages both for backend and frontend)
- once done execute `npm run start` — it will run backend & frontend together

Frontend will be available under: http://localhost:3000 while backend: http://localhost:5000.

## Tests

- backend — `npm run test:backend`
- frontend — `npm run test:frontend`
