using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class EntitiesModel
    {
        private Dictionary<string,string> entities;
        public EntitiesModel()
        {
            //Generate Example dataset.
            entities = new Dictionary<string, string>() {
                { "1", "entity1" },
                { "2", "entity2" },
                { "3", "entity3" },
                { "4", "entity4" }
            };
        }
        public KeyValuePair<string,string> getSingleEntity(string id)
        {
            var result = new KeyValuePair<string, string>(id, entities[id]);
            return result;
        }
        public KeyValuePair<string, string> postEntity(string id,string value)
        {
            entities.Add(id, value);
            var result = new KeyValuePair<string, string>(id, value);
            return result;
        }
        public List<KeyValuePair<string, string>> getEntities()
        {
            return entities.ToList<KeyValuePair<string, string>>();
        }
    }
}
