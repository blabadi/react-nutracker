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
one way or another redux is an implementation to observer design pattern (aka publish/subscriber) mainly for react apps (still can be used with anything).
- Definitions:
    - action: an event in the application
        - at least is has string type property
        - can have any other arbitrary data.
        - can be "dispatched" by components on demand
    - reducers: action handler to update state
        - pure functions (no db calls, no external calls just objects read write).
        - takes input state +  action 
        - outputs new object (new part of the state)
    - store:
        - references the whole state
        - dispatches actions
        - invokes reducers (subscribers) each with the part of the state they define 
    
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

- resourcers: https://redux.js.org/basics/exampletodolist

# Day3
## Async api call 
- by default the store is for sync dispatched actions, i.e. it won't support async calls out of the box.
- after some reading, the simplest approach would be to:
    - dispatch an action to do the call, that action would initiate an async call. 
    - when the response is received it will dispatch an action with the result received (either success / failure).
- so I already have SEARCH_FOOD action which will be used to send the ajax call (to be done), I created an action for receving the results RECEIVE_SEARCH_FOOD_RESULTS.

- I modifed my reducers as well:
    - if the action is SEARCH_FOOD it will set a flag that we are fetching data
    - if the action is RECEIVE_SEARCH_FOOD_RESULTS, we will handle the results for that term, and update the state with the results array and unset the fetching flag.
- the Async call action:
    - in FoodSearch.js we dispatched (mapDispatchToProperties) the searchFood action creator result (what builds SEARCH_FOOD action payload )
    - install corss-fetch `npm install --save cross-fetch` to use the fetch API and get promises for our async calls.
    - the dispatch(searchFood(term)) will change:
        - add a new action (fetchFood) :
            - this action takes a food search term
            - returns a function that takes dispatch as param (to use it)(store doesn't understand function actions by default we will see how to make it work)
            you will get this error: 
            ```Error: Actions must be plain objects. Use custom middleware for async actions.```
            - that function will call foodRepo which will do the network API call for us, currently it only return mock data  wrapped with Promise to fit the convention that all api calls to return promises to handle consistently in the action. 
        - the searchFood action will remain as is but now it indicates more the start of the async request. 
        - in mapDispatchToProperties we will dispatch(fetchFood) instead of searchFood.
    - now we will get the error above because our store can't handle function actions, so we will install `redux-thunk` 
        - this package is a redux middleware (i.e. it does some processing for redux actions intermediatly, and passes the result back to redux).
        - run `npm install --save redux-thunk`
        - modify our store creation logic: <br>
        ```const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));```
    - now we can see the app working correctly and shows the stub data 
    - now let's do a real network call:
        - renamed the mock method in foodRepo to findFoodMock(), and created new one for the real call which does a fetch call to our api and parse the json body.
        - run the nutracker-apis 
        - I added this in the package.json: `proxy": "http://localhost:8080` to avoid Cross origin errors so react will proxy requests to this server through the development server.
        - running the code will show results from server.
        
- resources: https://redux.js.org/advanced/asyncactions


# Day 4

Day 4 included working on many components to finish the read part of the dashboard and components interactions 
see this PR for all the changes with comments explaining.

https://github.com/blabadi/react-nutracker/pull/2

# Day 5

In this day I want to:
- add react router and profile page
- add propTypes

Problem:  Reading router params in component (ex: if i want the current date to show in url `/dashboard/:date` to bookmark it)

 - currently the period (date filter) is stored in the state and changed by actions (when user moves forward/backward)
 - react router suggest not to synchronize state with routes see readings [1]
 - to go around it they suggest to pass router params as filter and read them in `mapStateToProps(state, props => { match: { params }})`
    - components rendered by `<Route component={}>` get match in props by defualt
    - others need to use this: `withRouter(connect(mapState,mapDispatch)(LComp))`. this is also needed if our component doesn't get rerendered on route changes. (faced this
    issue in the Nav component).
- This means that we have two sources of truth router & redux store, which can become messy to wrap our head around in big applications since we won't quickly know if the component gets everything from redux store or it could get stuff from router in its own properties.
- the above also means that anything changing the route (changes filters) shouldn't be an action but a `<Link />` instead.

for now I want to keep this simple so I'll use the router without params (no specific url per date)

NavLink in router already provider accessiable links with active class property to style
readings:
<ol>
    <li>https://reacttraining.com/react-router/web/guides/redux-integration</li>
    <li>https://redux.js.org/advanced/usagewithreactrouter</li>
</ol>




# Things to check later:
- https://redux.js.org/recipes/serverrendering
- https://redux.js.org/recipes/implementingundohistory
