const redux = require("redux");

const counterReducer = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case "incremented":
      return state + 1;
    case "decremented":
      return state - 1;
    case "reseted":
      return 0;
  }
};

const store = redux.createStore(counterReducer);

const actionIncremented = {
  type: "incremented",
};

const actionDecremented = {
  type: "decremented",
};

const actionReseted = {
  type: "reseted",
};

//Al utilizar la store ya no es necesario llamar al reducer de esta manera
// counterReducer(0, actionIncremented);
// counterReducer(1, actionDecremented);
// counterReducer(0, actionReseted);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actionIncremented);
store.dispatch(actionIncremented);
store.dispatch(actionIncremented);
