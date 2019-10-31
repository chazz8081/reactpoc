using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using vsreact.Models;

namespace vsreact.Interfaces
{
    public interface IAgentRespository
    {
        List<Agent> AgentsRead();
    }
}
