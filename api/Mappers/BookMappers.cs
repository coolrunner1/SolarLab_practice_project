using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Models;
using api.Dtos.Book;

namespace api.Mappers
{
    public static class BookMappers
    {
        public static BookDto ToBookDto(this Book bookModel)
        {
            return new BookDto{
                Id=bookModel.Id,
                AuthorID=bookModel.AuthorID,
                Name=bookModel.Name,
                Genre=bookModel.Genre,
                Year=bookModel.Year,
                Description=bookModel.Description,
                Image=bookModel.Image,
                Language=bookModel.Language,
                epub=bookModel.epub,
                txt=bookModel.txt,
                pdf=bookModel.pdf,
                docx=bookModel.docx
            };
        }

        public static Book ToBookFromCreateDto(this CreateBookRequestDto bookDto){
            return new Book{
                AuthorID=bookDto.AuthorID,
                Name=bookDto.Name,
                Genre=bookDto.Genre,
                Year=bookDto.Year,
                Description=bookDto.Description,
                Image=bookDto.Image,
                Language=bookDto.Language,
                epub=bookDto.epub,
                txt=bookDto.txt,
                pdf=bookDto.pdf,
                docx=bookDto.docx
            };
        }
    }
}