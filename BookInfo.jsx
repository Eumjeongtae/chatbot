// BookInfo.jsx

import React from 'react';
import {  useNavigate } from 'react-router-dom';

function BookInfo({ bookData }) {
  const navigate = useNavigate();
  

  return (
    <button onClick={()=>navigate(`/detail/${bookData.id}`)}>
      <h2>책 제목: {bookData.book_name}</h2>
      <p>저자: {bookData.author}</p>
      {bookData.rent_count ? <p>대여 횟수 : {bookData.rent_count}</p> : null}
      {bookData.like_count ? <p>좋아요 : {bookData.like_count}</p> : null}
      <p>재고: {bookData.status === 0 ? 'o' : 'x'}</p>
    </button>
    
  );
}

export default BookInfo;
