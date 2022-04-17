# Phone Catalogue - Client side

The api endpoints called are:

- Get a short list (items= number of items retrieved) with basic information of phones: `phones/pagination/:items/:exclusiveStartKey
- Get extended information about one phone: `phones/:id`

## Starting 🚀

These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

### Prerequisites 📋

What do you need to install the software?

```
You need to have installed Node JS
```

### Installation 🔧

1. Download this repository in zip or clone the repository on your device (if you clone the repository, note that you will not be able to add your commits).
2. Open a terminal in the root folder of your repository.
3. Install the local dependencies by running the command in the terminal:

```
npm install
```

or

```
yarn install
```

### Starting the project ⚙️

Once you have done the previous step, **start the project every time you program**. To do this, run the command:

```
npm start
```

or

```
yarn start
```

## Deploying to Netlify

[Netlify](https://www.netlify.com/) is used as a Continuous Integration and Continuous Deployment (CI/CD) tool.

[staging app](https://phone-catalogue-app-staging.netlify.app)

Push the changes to the `main` branch in Github. Netlify will run

[prod app](https://phone-catalogue-app.netlify.app/)

Push the changes to the `prod` branch in Github. Netlify will run

## Tools

- The aplication uses [React.js](https://reactjs.org/) framework v17
- The main style tool used is [styled-components](https://styled-components.com/) <br/>
- [React-inner-image-zoom](https://github.com/laurenashpole/react-inner-image-zoom): implemented to allow the user to gather more information from the image
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component): added to handle infinite scroll loading states and calls to the server

## Quality

The quality test has been evaluated by [Lighthouse](https://developers.google.com/web/tools/lighthouse)

- Performance: 96-100%
- Accessibility: 100%
- Best Practices: 100%
- SEO: 100%
