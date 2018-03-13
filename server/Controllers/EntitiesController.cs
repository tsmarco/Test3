using System.IO;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Models;

namespace server.Controllers
{
    //Entities Controller
    //Reponsible for controlling entities routes.
    [Route("api/")]
    public class getEntities : Controller
    {
        //GetEntities
        //For fetching all entities
        [HttpGet("entities")]
        public IActionResult GetEntities()
        {
            var _entitiesModel = new EntitiesModel();
            var entities = _entitiesModel.getEntities();
            return new ObjectResult(entities);
        }

        //GetEntities
        //Fetches a single entity based on id.
        [HttpGet("entities/{id}/")]
        public IActionResult GetEntity(string id)
        {
            var _entitiesModel = new EntitiesModel();
            var entity = _entitiesModel.getSingleEntity(id);
            return new ObjectResult(entity);
        }

    }
}
