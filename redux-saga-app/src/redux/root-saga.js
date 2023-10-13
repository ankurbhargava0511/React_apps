import {all, call} from 'redux-saga/effects'
import { todoSaga } from './todoReducer'

export function* rootSaga(){
   yield all([call(todoSaga)]) 
}