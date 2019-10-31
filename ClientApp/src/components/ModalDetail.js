import React, { Component } from 'react';


class ModalDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false,
        }

        const cardStyleHorizontal = {
            maxWidth: '540px'
        };
    }

   
    render() {


        return (
               <div class="col-md-6" data-id={this.props.agentId}>
                     <div class="card mb-3" style={this.cardStyleHorizontal}>
                         <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src={this.props.imageUrl} class="card-img" alt={this.props.lastName} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">{this.props.firstName}&nbsp;{this.props.lastName}</h5>
                                <p/>
                                <span class="card-text">{this.props.agent.description}</span>

                                </div>
                            </div>
                         </div>
                     </div>
               </div>
        )
    }
}








export default ModalDetail;