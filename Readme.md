
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
1. Create a new route in the backend/routes/${nameOfYourResource}Route.js
2. Stub your route, example:

```
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('GET')
})

router.post('/', (req, res) => {
  res.send('POST')
})

router.put('/:id', (req, res) => {
  res.send('PUT')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE')
})

module.exports = router
```
3. Register your route in backend/router.js
4. Test t hat the endpoints are working using CURL or Postman
5. Create a new JS file in backend/controllers/${nameOfYourResource}Controller.js
6. Move the callbacks from the route to the controller, it should look a little bit like this
```
function listThings (req, res) {
	res.send('GET')
}

function createThing (req, res) {
  res.send('POST')
}

function updateThing (req, res) => {
  res.send('PUT')
}

function destroyThing (req, res) => {
  res.send('DELETE')
}

module.exports = {
  listThings,
  createTHing,
  updateThing,
  destroyThing
}

```
7. Import the controller in the route and update the routes, it should look like this

```
const express = require('express')
const router = express.Router()
const controller = require('path/to/my/controller')

router.get('/', controller.listThings)

router.post('/', controller.createThing)

router.put('/:id', controller.updateThing)

router.delete('/:id', controller.destroyThing)

module.exports = router
```

8. Test with CURL or Postman that the routes continue to work
9. Create a service in backend/src/${nameOfYourResource}Service.js
10. Create a class for the service and stub the methods in the service, it should look like this

```
class MyResourceService {
  listThings () {
    return [{ id: 3584 }]
  }
  createThing (thing) {
    return { id: 8654 }
  }
  updateThing (thingId, thing) {
     return 1
  }
  destroyThing(thingId, thing) {
    return 1
  }
}

module.exports = MyResourceService
```
11. Register your service in the service factory
12. Update the controller to use the service, it will should look like this

```
const ServiceFactory = require('path/to/service/factory')

async function listThings (req, res) {
  try {
    const service = ServiceFactory.getService('things')
    const things await service.listThings()
    res.json(things)
  } catch (ex) {
    res.status(500).send(JSON.stringify(ex))
  }
}

function createThing (req, res) {
  try {
    const service = ServiceFactory.getService('things')
    const thing await service.createThing(req.body)
    res.json(thing)
  } catch (ex) {
    res.status(500).send(JSON.stringify(ex))
  }
}

function updateThing (req, res) => {
  try {
    const { id } = req.params
    const service = ServiceFactory.getService('things')
    const things await service.updateThing(id, req.bdoy)
    res.json(things)
  } catch (ex) {
    res.status(500).send(JSON.stringify(ex))
  }
}

function destroyThing (req, res) => {
  try {
    const { id } = req.params
    const service = ServiceFactory.getService('things')
    const things await service.destroyThing(id)
    res.json(things)
  } catch (ex) {
    res.status(500).send(JSON.stringify(ex))
  }
}

module.exports = {
  listThings,
  createTHing,
  updateThing,
  destroyThing
}
```
13. Create a model to connect to the DB in backend/src/models
14. Add the model in the service configuration of the ServiceFactory
15. Update the service to use the model instead of the stubbed responses

### UI
1. Create a service to send the request to the backend in ui/src/services
2. Add a model for the CRUD controller in ui/src/models
3. Add a view in ui/src/views
4. Add a CRUD component to your view, you can use the user view as reference
5. Register the view in the ui/src/App.js router
6. Update the header in ui/src/components/Header.js to add a link to your view

You can find an example here:
https://github.com/gaboAcosta/sample-serverless-sample/pull/1/files