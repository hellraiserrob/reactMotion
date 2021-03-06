import React, { Component } from 'react';
// import { TransitionMotion, spring } from 'react-motion';

import TransitionGroup from 'react-addons-transition-group' // ES6
import AnimatedWrapper from '../common/wrappers/AnimatedWrapper'

import Square from '../common/primatives/square';


class Page extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isVisible: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {

        let isVisible = this.state.isVisible

        this.setState({
            isVisible: !isVisible
        })

    }

    render() {

        return (
            <div>

                <p>
                    Low level transition-group hooks
                </p>

                <TransitionGroup>
                    {this.state.isVisible && <Square />}
                </TransitionGroup>

                <button className="btn" onClick={this.toggle}>Toggle</button>
            </div>
        );
    }
}

const Wrapper = AnimatedWrapper(Page);
export default Wrapper;