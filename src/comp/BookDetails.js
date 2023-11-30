import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css"
import BookD from "./Book";
const BookDetails = () => {
    const params = useParams()
    const [ book , setBook] = useState([""])


    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
          .then((res) => res.json())
          .then((res) => setBook(res));
    }, [])


    return (
      <div className="book-details">
       <BookD ele={book} />
        
      </div>
    );
}

 
export default BookDetails;