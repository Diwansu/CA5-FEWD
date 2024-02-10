
import axios from "axios";
import "../App.css";
import searchLogo from "../assets/search.png";
import { useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setState(res.data.books))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!search) {
      const searchResult = state.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setBooks(searchResult);
    } else {
           setBooks(state);
    }
  }, [search, state]);


  const handleSearch = () => {
   
    if (!search) {
          setBooks(state);
    } else {
      

      const searchResult = state.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setBooks(searchResult);
    }
  };

  return (
    <>
      <div className="searchbuttonContainer">
        <input
          type="text"
          placeholder="Search your book"
          onChange={handleChange}
        />
        <img src={searchLogo} alt="searchButton" onClick={handleSearch} />
      </div>

      <div className="grid-container">
        {books.map((e) => (
          <div key={e.id} className="grid-item">
            <img src={e.imageLinks?.thumbnail} alt="image" />
            <h4>{e.title}</h4>
            <div className="emoji-Container">
              <p> {e.averageRating ?  e.averageRating : 3}⭐️</p>
              
               <p style={{"color" : 'green'}}>Free</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}



