# Phone Catalogue - Client side

### Frontend for phone catalogue management.

The catalogue retrieves a list of phones from a phones database and allows CRUD operations for authenticated users.

Backend can be found in the following repository: [phone-catalogue-server](https://github.com/crisouteda/phone-catalogue-server)

## ❤️ Live demo

The app is served in two environments:

[staging app](https://phone-catalogue-app-staging.netlify.app)

[prod app](https://phone-catalogue-app.netlify.app/)

## 💻 Development

These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

### 📋 Prerequisites

You need to have installed Node JS (Developed on v17.9.0).

### 🔧 Installation

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

### 🏁 Starting the project

To serve the app locally run:

```
npm run start
```

or

```
yarn start
```

### 🧪 Run tests

```
npm run cypress:open
```

or

```
yarn cypress:open
```

## 🚀 Deploying to Netlify

[Netlify](https://www.netlify.com/) is used as a Continuous Integration and Continuous Deployment (CI/CD) tool.

**Staging environment**:

Push the changes to the `main` branch in Github.

**Prod environment**:

Push the changes to the `prod` branch in Github.

In both cases Netlify will build and deploy the application to the appropiate environment.

## 🛠️ Tools

- The aplication uses [React.js](https://reactjs.org/) framework (version ^17.0.0)
- The main style tool used is [styled-components](https://styled-components.com/)(version ^5.3.5)
- [React-inner-image-zoom](https://github.com/laurenashpole/react-inner-image-zoom): implemented to allow the user to gather more information from the image(version ^3.0.0)
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component): added to handle infinite scroll loading states and calls to the server (version ^6.1.0)

## ⭐ Quality

The quality test has been evaluated by [Lighthouse](https://developers.google.com/web/tools/lighthouse)

- Performance: 96-100%
- Accessibility: 100%
- Best Practices: 100%
- SEO: 100%

An example report can be found [here](https://phone-catalogue-app.netlify.app/lighthouse.html).

## ⚙️ Backend & Endpoints

The endpoints from the [backend](https://github.com/crisouteda/phone-catalogue-server) called are:

- Sign up to get credentials to create, update and delete items from the database: `auth/signUp`
- Sign in to get credentials to create, update and delete items from the database: `auth/signIn`
- Get a short list (where items is the number of items to retrieve from the database) with basic information of phones: `phones/pagination/:items/:exclusiveStartKey
- Get extended information about one phone: `phones/:id`
- Create new phone: `phones/`
- Delete phone by id: `phones/delete`
- Update phone information: `phones/put`

## 📝 Following improvements and TODOS

- Add persistency to token. It should be updated every hour for security reasons.

- Add and improve tests

- UX/UI ensure optimal view in every screen size and improve themes and general design
