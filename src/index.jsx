import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from 'redux/store';
import PastasContainer from 'components/PastasContainer'
import RiceContainer from 'components/RiceContainer'



const App = () => {
    console.log(store.getState())
    return (
        <Provider store={store}>
            <div className="app">
                <PastasContainer />
                <RiceContainer />
            </div>
        </Provider>
    );
}



ReactDOM.render(<App />, document.getElementById('root'))