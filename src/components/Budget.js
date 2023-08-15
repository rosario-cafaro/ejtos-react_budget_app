import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget, Currency} = useContext(AppContext);

    const setBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (<div className='alert alert-secondary'>
        <span>Budget: {Currency}</span>
        <input
            required="required"
            type="number"
            id="cost"
            step="10"
            max="20000"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}>
        </input>
    </div>);
};
export default Budget;
