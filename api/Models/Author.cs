using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Author
    {
        public Book BookID { get; set; } = new Book();
    }
}