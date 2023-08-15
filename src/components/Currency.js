import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Currency = () => {
    const {dispatch, Currency} = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }


    return (
        <div className='alert alert-secondary'
             style={{backgroundColor: "lightgreen", color: "white"}}> Currency ({
            <select
                style={{
                    backgroundColor: "lightgreen", border: 0, color: "white",
            }}
                value={Currency} name="Currency" id="Currency"
                onChange={event => changeCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        })
        </div>
    );
};

export default Currency;
