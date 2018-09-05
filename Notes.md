# Day 1

## Starting
- created the app with create-react-app 
```npx create-react-app my-app```

## bootstrap
- installed bootstrap : `npm install bootstrap --save`
- import bootstrap in index.js

## components:
- search box:
    - created dashboard and search
    - created repos to abstract rest calls
    - passed changes from search to dashboard
    - onChange event handler from dashboard 
    - dashboard calls stub repo
    - passes result back 
        - needed key for iteration over resutls in render
        - need some way to pass generic search results / render function for results

## Repos
- abstract components from api details
- singletons : export only the instance

# Day 2
## Adding Redux
- installed redux, redux-react `npm install --save redux redux-react`
- renamed the components folder to presentational
    - this holds reusable components that don't interact with the external world
    - they just render the props they receive
- created FoodSearch component which is a container component to host the presentational Search box
- create the actions directory to host app actions
    - first action is searchFood
- create reducers to populate the new state based on the dispatched actions
    - first reducer handles search food action to get the foods from the repo.
- notes:
    - we create index.js to expose combined reducers, which will represent application state tree, i.e. searchFoodResult is the array resulted from the reducer function and is the new state property name.
    -  
- created the store and wrap the App component with Provider from react-redux to have the store available for all sub components, we pass the combined reducers to create store method

