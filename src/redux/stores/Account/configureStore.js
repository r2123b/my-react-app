// import { applyMiddleware, createStore } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { createEpicMiddleware } from 'redux-observable';
//import rootEpic from '../../epics/Account';
import rootReducer from '@/redux/reducers/Account';

// const epicMiddleware = createEpicMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools({ trace: true })(),
    // composeWithDevTools({ trace: flavor === 'dev' })(applyMiddleware(epicMiddleware)),
  );

  //epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
