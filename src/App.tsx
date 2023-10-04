import { ReactElement, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Book from './components/Book'

function App(): ReactElement {

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/library/book/")
      .then(res => res.json())
      .then(data => console.log(data))
  }, [searchText]);



  return (
    <>
      <Navbar search={"searchText"} handleSearch={setSearchText} />
      <div className="shelve p-3 md:p-16">
        <h2 className="text-xl font-semibold">All Books</h2>
        <hr />
        <hr />
        <hr />
        <div className='mt-3 flex flex-col gap-3'>
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </>
  )
}

export default App
