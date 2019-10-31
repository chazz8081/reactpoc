import React, { Component } from 'react';
import ModalDetail from "./ModalDetail";

class ModalFrame extends Component {




    constructor(props) {
        super(props);
    
        this.state = {
            visible: false,
            agentChosen: this.props.agentChosen
        };
    }



    static renderModalDetail(agentChosen) {




        return (
            <div class="col-md-6" data-id={agentChosen.agentId}>
                <div class="card mb-3" style={this.cardStyleHorizontal}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={agentChosen.imageUrl} class="card-img" alt={agentChosen.lastName} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{agentChosen.firstName}&nbsp;{agentChosen.lastName}</h5>
                                <p />
                                <span class="card-text">{agentChosen.description}</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }


    changeAgent = () => {
        //console.log("requesting...", this.props.agentChosen);
        this.setState({ agentChosen: this.props.agentChosen });
        
        console.log("agent chosen", this.state.agentChosen);
    }

    render() {
        let contents =  ModalFrame.renderModalDetail(this.state.agentChosen);

        return (
            <div>
                {contents}
            </div>
        );
    }
}


export default ModalFrame;