using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Dtos.Book;
using api.Mappers;

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
            var books=_context.Book.ToList()
            .Select(s => s.ToBookDto());;
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
            return Ok(book.ToBookDto());
        }

        [HttpPost]
        
        public IActionResult Create([FromBody] CreateBookRequestDto bookDto)
        {
            var bookModel=bookDto.ToBookFromCreateDto();
            _context.Book.Add(bookModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new {id=bookModel.Id}, bookModel.ToBookDto());
        }
    }
}