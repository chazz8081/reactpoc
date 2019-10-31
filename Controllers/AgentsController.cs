using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using vsreact.Interfaces;
using vsreact.Models;

namespace vsreact.Controllers
{
    [Route("api/[controller]")]
    public class AgentsController : Controller
    {

        private IAgentsService _agentsService;

        public AgentsController(IAgentsService agentsService)
        {
            _agentsService = agentsService;
        }

        [HttpGet("[action]")]
        public IEnumerable<Agent> Agents()
        {
            List<Agent> agents = new List<Agent>();

            agents = _agentsService.AgentsReadAll();
            return agents;
         }

       
    }
}