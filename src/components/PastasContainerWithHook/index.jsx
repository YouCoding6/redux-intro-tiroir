import { useSelector, useDispatch } from 'react-redux'
import { buyPastas } from 'redux/index';




const PastaContainerWithHook = () => {
    const pastas = useSelector(state => state.pastas);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Number of pastas kg:{pastas} </h1>
            <button onClick={() => dispatch(buyPastas())}>buyPastas</button>
        </div>
    )
}


export default PastaContainerWithHook