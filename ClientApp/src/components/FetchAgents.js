import React, { Component } from 'react';
import ExpandedDetail from "./ExpandedDetail";
import ModalFrame from "./ModalFrame";

export class FetchAgents extends Component {
  static displayName = FetchAgents.name;

   constructor (props) {
    super(props);
    this.state = { agents: [], loading: true, isModalOpen : false };

      fetch('api/Agents/Agents')
      .then(response => response.json())
          .then(data => {
           this.setState({ agents: data, loading: false, isModalOpen:false });
           });
   }

    

   static renderAgentsTable(agents) {

        const cardStyleHorizontal = {
            maxWidth: '540px'
        };




       const abridge = function (textInput, desiredLength) {

           var returnValues = ["", ""];

           if (textInput.length > desiredLength) {
               var textFirstHalf = "";
               textFirstHalf = textInput.substring(0, desiredLength);

               if (textFirstHalf.lastIndexOf(" ") > -1) {
                   textFirstHalf = textFirstHalf.substring(0, textFirstHalf.lastIndexOf(" "));
               }

               var textSecondHalf = textInput.replace(textFirstHalf, "");
               returnValues = [textFirstHalf, textSecondHalf];
           }
           else {
               returnValues = [textInput, ""];
           }

          
           return returnValues;
       }


        return (
            <div class="container">
              <div class="row">
                    {agents.map(agent =>
                        <div class="col-md-6" data-id={agent.agentId}>
                        <div class="card mb-3" style={cardStyleHorizontal}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={agent.imageUrl} class="card-img" alt={agent.lastName} />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                            <h5 class="card-title">{agent.firstName}&nbsp;{agent.lastName}</h5>
                                            <p/>
                                            <span class="card-text">{abridge(agent.description, 200)[0]}</span>
                                            <ExpandedDetail detail={abridge(agent.description, 200)[1]} />
                                            <ModalFrame agentChosen={agent} />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
            
        );
    }

  render () {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchAgents.renderAgentsTable(this.state.agents);

    return (
      <div>
        <h1>Agents Page</h1>
        {contents}
      </div>
    );
  }
}
