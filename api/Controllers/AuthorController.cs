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
        public IActionResult GetAll(){
            var authors=_context.Author.ToList()
            .Select(c => c.ToAuthorDto());
            return Ok(authors);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var author = _context.Author.Find(id);
            if (author==null)
            {
                return NotFound();
            }
            return Ok(author.ToAuthorDto());
        }
    }
}