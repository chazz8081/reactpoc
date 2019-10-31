
using Microsoft.EntityFrameworkCore;

using System.Linq;
using System.Threading.Tasks;

using System.Collections.Generic;
using System;
using System.Globalization;
using System.Data.SqlClient;
using System.Data;
using vsreact.Interfaces;
using vsreact.Models;
using vsreact.Context;

namespace vsreact.Repositories
{
    public class AgentRepository : IAgentRespository
    {
        private readonly ReactVSContext _agentContext;
        public AgentRepository(ReactVSContext cwaContext)
        {
            _agentContext = cwaContext;
        }
        public List<Agent> AgentsRead()
        {
            //string sqlString = "SELECT [AgentId],[FirstName],[LastName],[ImageUrl],[Description]FROM[dbo].[agents]";



            var agents = _agentContext.Agents.ToList();

            return agents;

        }
    }
}
