using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vsreact.Interfaces;
using vsreact.Models;

namespace vsreact.Services
{
    public class AgentsService: IAgentsService
    {
        private IAgentRespository _agentRepository;
        public AgentsService(IAgentRespository agentRepository)
        {
            this._agentRepository = agentRepository;
        }

        public List<Agent> AgentsReadAll()
        {
            return _agentRepository.AgentsRead();
        }
    }
}
