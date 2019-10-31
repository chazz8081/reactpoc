import React, { Component } from 'react';


class ExpandedDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }

        
    }


   
    showDetail = () => { this.setState({visible:(!this.state.visible)})};


    render() {



        return (
            <div>
                <span style={{ display: this.state.visible ? 'block' : 'none' }} >
                    <p>{this.props.detail}</p>
                </span>
                <p/>
                <button type="button" class="btn btn-primary" onClick={this.showDetail}>{this.state.visible ? 'Less' : 'More' }</button>
            </div>

            )
    }
        


}



export default ExpandedDetail;