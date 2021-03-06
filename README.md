# Phone Catalogue - Client side

### Frontend for phone catalogue management.

The catalogue retrieves a list of phones from a phones database and allows CRUD operations for authenticated users.

Backend can be found in the following repository: [phone-catalogue-server](https://github.com/crisouteda/phone-catalogue-server)

## โค๏ธ Live demo

The app is served in two environments:

[staging app](https://phone-catalogue-app-staging.netlify.app)

[prod app](https://phone-catalogue-app.netlify.app/)

## ๐ป Development

These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

### ๐ Prerequisites

You need to have installed Node JS (Developed on v17.9.0).

### ๐ง Installation

1. Download this repository as zip or clone the repository on your device
2. Open a terminal in the root directory of the repository.
3. Install the necessary dependencies by running:

```
npm install
```

or

```
yarn
```

### ๐ Starting the project

To serve the app locally run:

```
npm run start
```

or

```
yarn start
```

### ๐งช Run tests

```
npm run cypress:open
```

or

```
yarn cypress:open
```

## ๐ Deploying to Netlify

[Netlify](https://www.netlify.com/) is used as a Continuous Integration and Continuous Deployment (CI/CD) tool.

**Staging environment**:

Push the changes to the `main` branch in Github.

**Prod environment**:

Push the changes to the `prod` branch in Github.

In both cases Netlify will build and deploy the application to the appropiate environment.

## ๐ ๏ธ Tools

- The aplication uses [React.js](https://reactjs.org/) framework (version ^17.0.0)
- The main style tool used is [styled-components](https://styled-components.com/)(version ^5.3.5)
- [React-inner-image-zoom](https://github.com/laurenashpole/react-inner-image-zoom): implemented to allow the user to gather more information from the image(version ^3.0.0)
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component): added to handle infinite scroll loading states and calls to the server (version ^6.1.0)

## โญ Quality

The quality test has been evaluated by [Lighthouse](https://developers.google.com/web/tools/lighthouse)

- Performance: 96-100%
- Accessibility: 100%
- Best Practices: 100%
- SEO: 100%

An example report can be found [here](https://phone-catalogue-app.netlify.app/lighthouse.html).

## โ๏ธ Backend & Endpoints

The endpoints from the [backend](https://github.com/crisouteda/phone-catalogue-server) called are:

- Sign up to get credentials to create, update and delete items from the database: `auth/signUp`
- Sign in to get credentials to create, update and delete items from the database: `auth/signIn`
- Get a short list (where items is the number of items to retrieve from the database) with basic information of phones: `phones/pagination/:items/:exclusiveStartKey
- Get extended information about one phone: `phones/:id`
- Create new phone: `phones/`
- Delete phone by id: `phones/delete`
- Update phone information: `phones/put`

## ๐ Following improvements and TODOS

- Authentication token should be updated automatically shortly before its expiration date.

- Add and improve tests

- Improvements in user experience. Ensure optimal view in every screen size and improve themes and general design
