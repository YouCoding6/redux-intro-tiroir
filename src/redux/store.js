import { createStore, combineReducers } from 'redux';
import pastasReducer from 'redux/pastas/pastasReducer'
import riceReducer from 'redux/rice/riceReducer'


const rootReducer = combineReducers({
    pastas: pastasReducer,
    rice: riceReducer
})


let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



export default store