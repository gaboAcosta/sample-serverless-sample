
# Sample Serverless Project

## Prerequisites

In order to run this project, you will need:
1. Node 14 installed
2. Docker and Docker compose installed

## Working locally

### To start the backend:

1. cd backend
2. cp .env.sample .env
3. yarn
4. yarn storage
5. yarn migrate
6. yarn start

### To start the UI:
1. cd ui
2. yarn
3. yarn start

### Login:
By default authentication is disabled in your local, you can change this with the `DISABLE_LOGIN`
environment variable in the .env file in the backend, you can also change 
(and you should if you deploy this to a remote environment, or I'll hack you!) 
the `TOKEN_SECRET` environment variable to generate the JWT tokens 

## Adding a CRUD element

### Backend
1. Add a migration for your new resource running the following command: `yarn migrate:generate ${nameOfYourResource}`
2. Add a model to map your table in backend/src/models
3. Add a Service to handle the CRUD in backend/src/services
4. Register the service on the service factory in backend/src/services/factory.js
5. Add a controller on backend/src/controllers
6. Add validations for your CRUD requests in backend/src/validations/${entityName}.js
7. Add an express router in backed/src/routes/${entityName}.js
8. Register the router on backend/src/router.js

### UI
1. Create a service to send the request to the backend in ui/src/services
2. Add a model for the CRUD controller in ui/src/models
3. Add a view in ui/src/views
4. Add a CRUD component to your view, you can use the user view as reference
5. Register the view in the ui/src/App.js router
6. Update the header in ui/src/components/Header.js to add a link to your view