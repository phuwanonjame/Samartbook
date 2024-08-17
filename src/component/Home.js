import React, { useEffect, useState } from "react";
import samart from "../image/samartwallpaper.jpg";
import axios from "axios";

function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("harry potter");
  const [showFullDescription, setShowFullDescription] = useState({});
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [dataBook, setDataBook] = useState(null);
  const apiKey = "AIzaSyCAGbB4atuKoXde2FrYi5nhhsF8YakL0uk";

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: searchTerm,
          key: apiKey,
        },
      })
      .then((response) => {
        setBooks(response.data.items || []);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [searchTerm, apiKey]);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);
  console.log(books);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: searchTerm,
          key: apiKey,
        },
      })
      .then((response) => {
        setBooks(response.data.items || []);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const toggleDescription = (bookId) => {
    setShowFullDescription((prev) => ({
      ...prev,
      [bookId]: !prev[bookId],
    }));
  };

  const handleShowAllBooks = () => {
    setShowAllBooks(!showAllBooks);
  };

  const handleBookClick = (book) => {
    setDataBook(book);
    setOpenBook(true);
  };

  return (
    <section className={`relative ${fadeIn ? "fade-in" : ""}`}>
      {/* Hero Section */}
      <div
        className={`relative h-[35vw] overflow-hidden bg-gray-900 ${
          fadeIn ? "slide-up" : ""
        }`}
      >
        <img
          src={samart}
          alt="Background"
          className="absolute inset-0 opacity-50 object-bottom w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
          <div className="bg-[#035dd3] p-6 md:p-8 w-full max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl rounded-xl shadow-2xl">
            <div className="flex flex-col justify-center items-center space-y-4">
              <span className="text-lg md:text-2xl lg:text-3xl text-white font-bold text-center">
                ค้นหาหนังสือและทรัพยากรสารสนเทศอื่นๆ
              </span>
              <form
                onSubmit={handleSearchSubmit}
                className="flex flex-col space-y-2 w-full"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Keyword",
                    "Title",
                    "Author",
                    "ISBN/ISSN",
                    "Journal title",
                  ].map((label) => (
                    <label
                      key={label}
                      className="flex items-center space-x-2 cursor-pointer text-white"
                    >
                      <input
                        type="radio"
                        name="searchType"
                        className="form-radio"
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full outline-none p-2 rounded-md border border-gray-300 focus:border-blue-500"
                  placeholder="Find book"
                />
                <button
                  type="submit"
                  className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div
        className={`w-full flex flex-col items-center py-10 ${
          fadeIn ? "fade-in" : ""
        }`}
      >
        <div className="w-full max-w-6xl px-4">
          {!openBook && !dataBook && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-600 text-2xl font-semibold">
                  Recommended
                </span>
                <button
                  onClick={handleShowAllBooks}
                  className="cursor-pointer text-blue-500 hover:underline text-lg"
                >
                  {showAllBooks ? "Show Less" : "ดูทั้งหมด"}
                </button>
              </div>
              <div className="flex flex-wrap gap-6">
                {books.slice(0, showAllBooks ? books.length : 4).map((book) => (
                  <div
                    key={book.id}
                    className="max-w-sm w-full hover:opacity-75 cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105"
                    onClick={() => handleBookClick(book)}
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={
                        book.volumeInfo.imageLinks?.thumbnail ||
                        "https://via.placeholder.com/300x400"
                      }
                      alt={book.volumeInfo.title}
                      style={{ objectFit: "cover", height: "12rem" }}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {book.volumeInfo.title}
                      </div>
                      <p
                        className={`text-gray-700 text-base ${
                          showFullDescription[book.id] ? "" : "line-clamp-3"
                        }`}
                      >
                        {book.volumeInfo.description ||
                          "No description available."}
                      </p>
                      {book.volumeInfo.description && (
                        <button
                          onClick={() => toggleDescription(book.id)}
                          className="text-blue-500 mt-2"
                        >
                          {showFullDescription[book.id]
                            ? "Read Less"
                            : "Read More"}
                        </button>
                      )}
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {book.volumeInfo.categories?.map((category) => (
                        <span
                          key={category}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {openBook && dataBook && (
            <div className=" inset-0  flex flex-col items-center justify-center p-4">
              <div className="flex justify-start w-full">
              <button
                  onClick={() => {
                    setOpenBook(false);
                    setDataBook(null);
                  }}
                  className="  py-2 px-4 rounded-md"
                >
                 ย้อนกลับ
                </button>
              </div>
             
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">
                  {dataBook.volumeInfo.title}
                </h2>
                <span>authors: {dataBook.volumeInfo.authors}</span>
                <span>categories: {dataBook.volumeInfo.categories}</span>
                <span>publishedDate: {dataBook.volumeInfo.publishedDate}</span>
                <img
                  className="   mb-4"
                  src={
                    dataBook.volumeInfo.imageLinks?.thumbnail ||
                    "https://via.placeholder.com/300x400"
                  }
                  alt={dataBook.volumeInfo.title}
                  // style={{ objectFit: 'cover', height: '12rem' }}
                />
                <p className="mb-4">
                  {dataBook.volumeInfo.description ||
                    "No description available."}
                </p>
                
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .slide-up {
          animation: slideUp 1s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default Home;
