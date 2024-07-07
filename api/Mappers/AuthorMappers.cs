using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Models;
using api.Dtos.Author;

namespace api.Mappers
{
    public static class AuthorMappers
    {
        public static AuthorDto ToAuthorDto(this Author authorModel)
        {
            return new AuthorDto{
                Id=authorModel.Id,
                Name=authorModel.Name,
                Description=authorModel.Description,
                Image=authorModel.Image,
                Country=authorModel.Country,
                BookID = authorModel.BookID.Select(c => c.ToBookDto()).ToList()
            };
        }
        public static Author ToAuthorFromCreateDto(this CreateAuthorRequestDto authorDto){
            return new Author{
                Name=authorDto.Name,
                Description=authorDto.Description,
                Image=authorDto.Image,
                Country=authorDto.Country
            };
        }
    }
}