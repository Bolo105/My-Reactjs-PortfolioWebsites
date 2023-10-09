import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Card = styled.div`
    height: 350px;
    padding-top: 25px;
    margin: 0 5px;
    text-align: center;
`;

export const BooksTemathics = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const searchTerm = "self motivation"; // Término de búsqueda para estos tres temas
 const maxResults = 10; // Número máximo de resultados que deseamos obtener

const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${maxResults}&key=AIzaSyDRQ4k1QTLNf4KV2W4kd0Gx4MaDM8zveb8`;

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await axios.get(apiUrl);
        setPopularBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching popular books', error);
      }
    };

    fetchPopularBooks();
  }, [apiUrl]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mostrar 4 imágenes a la vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3, // Mostrar 3 imágenes en dispositivos medianos
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Mostrar 2 imágenes en dispositivos pequeños
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Mostrar 1 imagen en dispositivos extra pequeños
        },
      },
    ],
  };

  return (
    <div id='booksthematics' className="container">
      <div className="row my-5">
        <h1 className="text-center">Temathic.</h1>
        <p className="fw-light w-75 mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque est neque facilis debitis, repellat dolorem.
        </p>
      </div>

      <Slider {...settings} className="row g-4 my-5 mx-auto owl-carousel owl-theme">
        {popularBooks.map((book) => (
        <div key={book.id} className="col product-item mx-auto mb-4">
          <Card className='card pt-15px' >
            <div className="product-img">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="img-fluid d-block mx-auto" style={{ width: '150px', height: '200px', objectFit: 'cover' }}/>
            </div>
            <div className="product-info p-3">
            <h6 className="authors">{book.volumeInfo.authors?.join(', ')}</h6>
              <h5 className="title">{book.volumeInfo.title}</h5>
            </div>
          </Card>
        </div>
        ))}
      </Slider>
    </div>
  );
};