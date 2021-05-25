const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  
  const gameReducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1,
          cash: state.cash
        }
      }
      case 'travel': {
        if (state.supplies - 20 * action.payload < 0) {
          return state;
        }
        return {
          ...state,
          supplies: state.supplies - 20 * action.payload,
          distance: state.distance + 10 * action.payload,
          days: state.days + action.payload,
          cash: state.cash
        }
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          distance: state.distance,
          days: state.days + 1,
          cash: state.cash
        }
      }
      case 'sell': {
        if (state.supplies - 20 * action.payload < 0) {
          return state;
        }
        return {
          ...state,
          supplies: state.supplies - 20 * action.payload,
          distance: state.distance,
          days: state.days,
          cash: state.cash + 5 * action.payload
        }
      }
      case 'buy': {
        if (state.cash - 15 * action.payload < 0) {
          return state;
        }
        return {
          ...state,
          supplies: state.supplies + 25 * action.payload,
          distance: state.distance,
          days: state.days,
          cash: state.cash - 15 * action.payload
        }
      }
      case 'theft': {
        if (action.payload === 0) {
          return state;
        }
        return {
          ...state,
          supplies: state.supplies,
          distance: state.distance,
          days: state.days,
          cash: state.cash / (2 * action.payload)
        }
      }
      default: {
        return state;
      }
    }
  }
  
  let wagon = gameReducer(undefined, {});
  console.log(wagon);
  
  let action = { type: 'travel', payload: 1 };
  wagon = gameReducer(wagon, action);
  console.log(wagon);
  
  action = { type: 'gather', payload: 0 };
  wagon = gameReducer(wagon, action);
  console.log(wagon);
  
  action = { type: 'tippedWagon', payload: null };
  wagon = gameReducer(wagon, action);
  console.log(wagon);
  
  action = { type: 'travel', payload: 3 };
  wagon = gameReducer(wagon, action);
  console.log(wagon);
  
  action = { type: 'travel', payload: 8 };
  wagon = gameReducer(wagon, action);
  console.log(wagon);
  
  action = { type: 'buy', payload: 13 };
  wagon = gameReducer(wagon, action);
  console.log(wagon);
  
  action = { type: 'sell', payload: 16 };
  wagon = gameReducer(wagon, action);
  console.log(wagon);
  
  action = { type: 'theft', payload: 4 };
  wagon = gameReducer(wagon, action);
  console.log(wagon);