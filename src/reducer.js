const initialState = {
    value: 0,
    color: "yellow"
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    let { newColor } = action;
    let {newInput} = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    } else if (type ==="DECREMENT"){
        return{
            value:state.value -1
        }
    }  else if (type ==="INCREMENTFIVE"){
        return{
            value:state.value+5
        }
    } else if (type==="DECREMENTFIVE"){
        return{
            value:state.value-5
        }
    } else if (type==="changeColor"){

            if(newColor === "red"){
                return{
                    color:"red",
                    value:state.value
                }
            } else if(newColor === "green"){
                return{
                    color:"green",
                    value:state.value
                }
            } else if (newColor ==="blue"){
                return{
                    color:"blue",
                    value:state.value
                }
            }

    }else if(type ==="CHANGEINPUT"){
        return{
            value:newInput
        }
    }
    return state
}