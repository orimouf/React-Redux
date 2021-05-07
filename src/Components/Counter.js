import React, {Component} from 'react'
import ButtonExampleGroupMixed from './ButtonExampleGroupMixed'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increaseCount, decreaseCount, resetCount } from '../Actions/Counter'
import { Label, Grid } from 'semantic-ui-react'

class Counter extends Component {
    static mapStateToProps = state => {
        return {
            count: state.count
        }
    }

    static mapDispatchToProps = dispatch => {
        return bindActionCreators({increaseCount, decreaseCount, resetCount}, dispatch)
    }

    render() {
        const { increaseCount, decreaseCount, resetCount } = this.props
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
                        <Label circular color={'yellow'} key={'yellow'} style={styleCircular}>
                            {this.props.count}
                        </Label>
                    </Grid.Row> 
                </Grid>
                <Grid centered columns={4}>
                    <Grid.Column>
                        <ButtonExampleGroupMixed 
                    handleIncrease={increaseCount} handleDecrease={decreaseCount} handleReset={resetCount} />
                    </Grid.Column>   
                </Grid>
            </div>
        )
    }
}

export default connect(Counter.mapStateToProps, Counter.mapDispatchToProps)(Counter)