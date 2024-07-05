using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;

namespace api.Dtos.Book
{
    public class BookDto
    {
        public int Id { get; set; }
        //public int? AuthorID {get; set;}
        public string Name { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public int Year { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public string Language { get; set; } = string.Empty;
        public string epub { get; set; } = string.Empty;
        public string txt { get; set; } = string.Empty;
        public string pdf { get; set; } = string.Empty;
        public string docx { get; set; } = string.Empty;
    }
}