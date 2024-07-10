using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Dtos.Author;
using api.Mappers;

namespace api.Controllers
{
    [Route("api/author")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        public AuthorController(ApplicationDBContext context)
        {
            _context=context;

        }

        [HttpGet]
        public async Task<IActionResult> GetAll(){
            var authors= await _context.Author.ToListAsync();
            var authorsDto=authors.Select(c => c.ToAuthorDto());
            return Ok(authorsDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var author = await _context.Author.FindAsync(id);
            if (author==null)
            {
                return NotFound();
            }
            return Ok(author.ToAuthorDto());
        }

        [HttpPost]
        
        public async Task<IActionResult> Create([FromBody] CreateAuthorRequestDto authorDto)
        {
            var authorModel=authorDto.ToAuthorFromCreateDto();
            _context.Author.Add(authorModel);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new {id=authorModel.Id}, authorModel.ToAuthorDto());
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateAuthorRequestDto updateDto)
        {
            var authorModel=_context.Author.FirstOrDefault(x => x.Id == id);

            if (authorModel==null)
            {
                return NotFound();
            }

            authorModel.Name=updateDto.Name;
            authorModel.Description=updateDto.Description;
            authorModel.Image=updateDto.Image;
            authorModel.Country=updateDto.Country;

            _context.SaveChanges();

            return Ok(authorModel.ToAuthorDto());

        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var authorModel = _context.Author.FirstOrDefault(x => x.Id == id);

            if(authorModel==null)
            {
                return NotFound();
            }

            _context.Author.Remove(authorModel);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}