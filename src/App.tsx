import { ReactElement, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Book from './components/Book'
import AddBook from './components/AddBook'

function App(): ReactElement {

  const [searchText, setSearchText] = useState<String>("")
  const [bookList, setBookList] = useState([])



  useEffect(() => {
    fetch("http://localhost:3000/library/book/")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBookList(data)
      })
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/library/book/findBook", {
      method: "POST",
      body: JSON.stringify({ searchText: searchText }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        setBookList(data)
      })
  }, [searchText]);



  return (
    <>
      <Navbar searchText={searchText} handleSearch={setSearchText} />
      <div className="shelve p-3 md:p-16 pt-8">
        <h2 className="text-xl font-semibold">All Books</h2>
        <hr />
        <hr />
        <hr />
        <div className='mt-3 flex flex-col gap-3'>
          {bookList ? bookList.map(book => <Book bookDetails={book} key={book._id} />) : ""}
        </div>
        <button className="fixed bottom-10 right-10 bg-blue-500 text-white hover:bg-black p-2 rounded-md">Add Book</button>
      </div>
      <AddBook />
    </>
  )
}

export default App
