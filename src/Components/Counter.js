import React, { useReducer } from 'react'
import ButtonExampleGroupMixed from './ButtonExampleGroupMixed'
import { increaseCount, decreaseCount, resetCount } from '../Actions/Counter'
import { Label, Grid } from 'semantic-ui-react'
import counterReducer from '../reducers/counterReducer'

function Counter (){
    
    const INTIAL_STATE = {count: 0}
    const [state, dispatch] = useReducer(counterReducer, INTIAL_STATE)
    const styleCircular = {
        minWidth: "6em",
        minHeight: "6em",
        lineHeight: "5em",
        fontSize: "xx-large"
    }

    return(
        <div>
            <Grid centered columns={4}>
                <Grid.Row>
                    <Label circular color={'yellow'} key={'yellow'}  style={styleCircular} >
                        {state.count}
                    </Label>
                </Grid.Row> 
            </Grid>
            <Grid centered columns={4}>
                <Grid.Column>
                    <ButtonExampleGroupMixed 
                        handleIncrease={()=> dispatch(increaseCount)} 
                        handleDecrease={()=> dispatch(decreaseCount)} 
                        handleReset={()=> dispatch(resetCount)} />
                </Grid.Column>   
            </Grid>
        </div>
    )
}

export default Counter