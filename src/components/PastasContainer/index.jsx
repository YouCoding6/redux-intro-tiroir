import { buyPastas, eatPastas } from 'redux/index';
import { useSelector, useDispatch } from 'react-redux'


const PastasContainer = () => {

    const pastas = useSelector(state => state.pastas.pastas);
    const dispatch = useDispatch();

    return (
        <div className="PastasContainer">
            <h1>Number of pastas kg : {pastas}</h1>
            <button onClick={() => dispatch(buyPastas())}>Buy pastas</button>
            <button onClick={() => dispatch(eatPastas())}>eat pastas</button>
        </div>

    )
}



export default PastasContainer
