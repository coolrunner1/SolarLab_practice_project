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
using api.Models;
using Microsoft.AspNetCore.Mvc.Rendering;

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
        public async Task<IActionResult> GetAll(){
            var books = await _context.Book.ToListAsync();
            var booksDto = books.Select(s => s.ToBookDto());
            return Ok(booksDto);
        }

        [HttpGet]
        [Route("api/book/search/{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var book = await _context.Book.FindAsync(id);
            if (book==null)
            {
                return NotFound();
            }
            return Ok(book.ToBookDto());
        }

        /*[HttpGet]
        [Route("api/book/search/{bookName:string}")]
        public async Task<IActionResult> GetByName([FromRoute] string bookName)
        {
            var books = from name in _context.Book select name;
            if (!string.IsNullOrEmpty(bookName))
            {
                books = books.Where(s => s.Name.Contains(bookName));
            }
            else
            {
                return NotFound();
            }
            var books2 = new SelectList(await books.Distinct().ToListAsync());
            return Ok(books);
        }*/


        [HttpPost]
        public IActionResult Create([FromBody] CreateBookRequestDto bookDto)
        {
            var bookModel=bookDto.ToBookFromCreateDto();
            _context.Book.Add(bookModel);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new {id=bookModel.Id}, bookModel.ToBookDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateBookRequestDto updateDto)
        {
            var bookModel= await _context.Book.FirstOrDefaultAsync(x => x.Id == id);

            if (bookModel==null)
            {
                return NotFound();
            }

            bookModel.AuthorID=updateDto.AuthorID;
            bookModel.Name=updateDto.Name;
            bookModel.Genre=updateDto.Genre;
            bookModel.Year=updateDto.Year;
            bookModel.Description=updateDto.Description;
            bookModel.Image=updateDto.Image;
            bookModel.Language=updateDto.Language;
            bookModel.epub=updateDto.epub;
            bookModel.txt=updateDto.txt;
            bookModel.pdf=updateDto.pdf;
            bookModel.docx=updateDto.docx;

            await _context.SaveChangesAsync();

            return Ok(bookModel.ToBookDto());

        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var bookModel = await _context.Book.FirstOrDefaultAsync(x => x.Id == id);

            if(bookModel==null)
            {
                return NotFound();
            }

            _context.Book.Remove(bookModel);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}