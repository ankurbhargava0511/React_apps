import { createSelector } from "reselect";
import {takeLatest, all, call, put} from 'redux-saga/effects'

export const TO_DO_ACTION_TYPES = {
  //SET_TO_DO: "SET_TO_DO",
  FETCH_TODO_START: "FETCH_TODO_START",
  FETCH_TODO_SUCCESS: "FETCH_TODO_SUCCESS",
  FETCH_TODO_FAILED: "FETCH_TODO_FAILED",
};

const INITIAL_STATE = {
  allTodo: [],
  isLoading: false,
  error: null,
};

export const TodoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case TO_DO_ACTION_TYPES.FETCH_TODO_START:
      return { ...state, isLoading: true };
    case TO_DO_ACTION_TYPES.FETCH_TODO_SUCCESS:
      return { ...state, allTodo: payload, isLoading: false };
    case TO_DO_ACTION_TYPES.FETCH_TODO_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};

const createAction = (type, payload) => ({ type, payload });

//export const setToDo = (ToDo) =>
//createAction(TO_DO_ACTION_TYPES.SET_TO_DO, ToDo);

export const fetchToDoStart = () =>
  createAction(TO_DO_ACTION_TYPES.FETCH_TODO_START);

export const fetchToDoSuccess = (todo) =>
  createAction(TO_DO_ACTION_TYPES.FETCH_TODO_SUCCESS, todo);

export const fetchToDoFailed = (error) =>
  createAction(TO_DO_ACTION_TYPES.FETCH_TODO_FAILED, error);


    
  
export function* fetchToDoAsync () {
  
  try {
    const toDoArray = yield call(getUsers);
    yield put(fetchToDoSuccess(toDoArray));
  } catch (error) {
    console.log("error")
    yield put(fetchToDoFailed(error));
  }
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    await sleep(5000);
    return data;
  } catch (error) {
    throw error;
  }
}

/*
export const selectToDo = (state) => {
  return state.toDos.allTodo;
};
*/

export function* onfetchTODo()
{
  yield takeLatest(TO_DO_ACTION_TYPES.FETCH_TODO_START,fetchToDoAsync)
}

export function* todoSaga(){
  yield all([call(onfetchTODo)])
}

const selectToDoReducer=  (state) => state.toDos;

export const selectToDo = createSelector(
  [selectToDoReducer],
  (todo)=> {
    return todo.allTodo;
  }
);

export const selectLoding =  (state) => state.toDos.isLoading;
export const selectError =  (state) => state.toDos.error;
