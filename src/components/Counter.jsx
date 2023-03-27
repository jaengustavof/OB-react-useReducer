import React, { useReducer, useContext } from 'react';

//Actions

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Context
const myContext = React.createContext(null);

const CounterComponent = () => {
     
    const state = useContext(myContext);

    return (
        
        <p>Counter: {state.count}</p>
    )
        
}


const Counter = () => {

    // We create an initial state
    const initialState = {
        count: 0
    }

    // Reducer to change state
    const reducer = (state, action) => {

        switch(action.type){
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity
                }

            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity
                }

            case RESET:
                return {
                    count: 0
                }

            default:
                return state;
        }

    } 

    // Asign useReducer to state, reducer and dispatch
    const [state, dispatch] = useReducer(reducer, initialState); //reducer is the function on line 19. initialState is on line 12

    return (
        <myContext.Provider value={state}>
            <div>
                {/*Counter: { state.count }  */}
                <CounterComponent></CounterComponent>

                <button onClick={ 
                    ()=> dispatch({
                        type: INCREMENT, 
                        payload: {
                            quantity: 6
                        }
                    })
                }>
                    INCREMENT
                </button>

                <button onClick={ 
                    ()=> dispatch({
                        type: DECREMENT, 
                        payload: {
                            quantity: 4
                        }
                    })
                }>
                    DECREMENT
                </button>

                <button onClick={ ()=> dispatch({type: RESET})}>
                    RESET
                </button>
            </div>
        </myContext.Provider>

    );
}

export default Counter;
