import { ReactElement, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Book from './components/Book'
import AddBook from './components/AddBook'

function App(): ReactElement {

  const [searchText, setSearchText] = useState<String>("")
  const [bookList, setBookList] = useState([])
  const [addButton, setAddButton] = useState<Boolean>(false)



  useEffect(() => {
    fetch("http://localhost:3000/library/book/")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBookList(data)
      })
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:3000/library/book/findBook/${searchText}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log("Somedata   ", data)
  //       setBookList(data) 
  //     })
  // }, [searchText])

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
      <div className="shelve py-3 pt-20 flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold">All Books</h2>
        <hr className='w-full' />
        <hr />
        <hr />
        <div className='mt-3 flex flex-col gap-3 w-screen'>
          {bookList ? bookList.map(book => <Book bookDetails={book} key={book._id} />) : ""}
        </div>
        <button className="fixed bottom-10 right-10
         bg-blue-500 text-white hover:bg-black p-2 rounded-md"
          onClick={() => {
            setAddButton(prevState => !prevState)
            console.log(addButton)
          }}
        >
          Add Book
        </button>
      </div>
      <AddBook openAddFormBtn={addButton} handleAddForm={setAddButton} />
    </>
  )
}

export default App
