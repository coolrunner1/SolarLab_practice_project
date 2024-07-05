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
                BookID = authorModel.BookID.Select(c => c.ToBookDto()).ToList()
            };
        }
    }
}