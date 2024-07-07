using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Book
{
    public class CreateBookRequestDto
    {
        [Required]
        public int AuthorID {get; set;}
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        public string Genre { get; set; } = string.Empty;
        [Required]
        public int Year { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        [Required]
        public string Language { get; set; } = string.Empty;
    }
}