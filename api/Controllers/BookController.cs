using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public BookController(ApplicationDBContext context)
        {
            _context=context;

        }

        [HttpGet]
        public IActionResult GetAll(){
            var books=_context.Book.ToList();
            return Ok(books);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var book = _context.Book.Find(id);
            if (book==null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        //[HttpPost]
        
        //public IActionResult Create([FromBody] CreateBookRequest book)
    }
}