import { buyRice, eatRice } from 'redux/index';
import { useSelector, useDispatch } from 'react-redux';




const RiceContainer = () => {

    const rice = useSelector(state => state.rice.rice);
    const dispatch = useDispatch();

    return (
        <div className="RiceContainer">
            <h1>Number of rice kg : {rice}</h1>
            <button onClick={() => dispatch(buyRice())}>Buy rice</button>
            <button onClick={() => dispatch(eatRice())}>eat rice</button>
        </div>

    )
}



export default RiceContainer
