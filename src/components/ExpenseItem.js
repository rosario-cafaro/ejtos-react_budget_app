import React, {useContext} from 'react';
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa';
import {AppContext} from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch, Currency} = useContext(AppContext);


    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Currency}{props.cost}</td>
            <td>
                <FaPlusCircle size='2.2em' color="green" onClick={event => increaseAllocation(props.name)}></FaPlusCircle>
            </td>
            <td>
                <FaMinusCircle size='2.2em' color="red" onClick={event => decreaseAllocation(props.name)}></FaMinusCircle>
            </td>
        </tr>
    );
};

export default ExpenseItem;
