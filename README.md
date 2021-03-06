# Code challenge - Daniel Rodrigues

This project implements the to-do wev app for Getir code challenge.

## Project information

- Developed using React, Redux and Redux-Saga.
- Tested using Jest and react-testing-library.
- Node version `v14.16.1` (LTS)
- Application available on [Heroku](https://danierod-todoit.herokuapp.com/)

## Project structure

- `src` Base app files.
- `src/components` Reusable components, in this case TodoList
- `src/components/TodoList` Implementation of the TodoList component and its
  sub-components.
- `src/mocks` Implementation of mock server (MSW), both for the browser and
  tests.
- `src/redux` All the redux related code. Creation of the store, reducers, sagas
  and actions.
- `src/utils` Folder for util files, in this case `test-utils.jsx` that
  implements a wrapper around `react-testing-library` render method.

## Technical decisions

- As requested in the Front-end assignment I used React + Redux + Sagas.
- **Typescript**, I usually use Typescript in my React apps, but since it wasn't
  mentioned, I decided not to use it to avoid extra complexity when reviewing
  the assignment.
- **Redux - Saga**, Last time I used Redux in a project it was using the HOC
  approach, where we extend the components with the `mapStateToProps` and
  `mapDispatchToProps`, in this implementation I decided to use the Hooks
  approach, keeping the code simpler and easier to read.
- **Compound pattern**, for the TodoList, I decided to follow the Compound
  pattern, so I keep the component totally presentational and without
  unnecessary business logic. Using this pattern also gives much more control
  and flexibility when using the component in multiple places of the
  application.
- **Tests**, regarding the tests I follow two different strategies. For the
  Components I write functional tests on the Higher Level component (in this
  case App.js). This approach makes the tests much more resilient to possible
  refactors that happen during the development of the application. Regarding
  Reducers and Sagas I use Unit Tests on function level, since these should be
  Pure functions. Regarding the Saga tests, I decided not to invest the time
  right now, since it would require me to invest sometime understanding what is
  the best approach (reference
  [Saga Testing](https://redux-saga.js.org/docs/advanced/Testing/)).

## TODO's

If I had a little more time to invest on this code assignment, I would probably
focus on:

- Extract some code into components, for example the buttons and the editable
  input
- Feedback and error handling
- Add more coverage for the tests

## Project commands

### Install dependencies

```zsh
yarn
```

### Running the project

```zsh
# (make sure dependencies have been installed before.)
yarn start
```

### Executing tests

```zsh
# (make sure dependencies have been installed before.)
yarn test
```
