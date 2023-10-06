import { ReactElement, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Book from './components/Book'
import AddBook from './components/AddBook'
import Deleted from './components/Deleted'

function App(): ReactElement {

  const [searchText, setSearchText] = useState<String>("")
  const [bookList, setBookList] = useState([])
  const [addButton, setAddButton] = useState<Boolean>(false)
  const [deleteModal, setDeleteModal] = useState(true)




  useEffect(() => {
    // fetch("http://localhost:3000/library/book/")
    fetch("https://mylibrarian.zeabur.app/library/book/")
      .then(res => {
        if (res.ok) {
          console.log("Got the books. OKAY!")
          return res.json()
        } else {
          alert("Failed to get books")
          console.log(res)
          return []
        }
      })
      .then(data => {
        console.log("Get Books Not Successfull")
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
    // fetch("http://localhost:3000/library/book/findBook", {
    fetch("https://mylibrarian.zeabur.app/library/book/findBook", {
      method: "POST",
      body: JSON.stringify({ searchText: searchText }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        setBookList([])
        return []
      }
    })
      .then(data => {
        setBookList(data)
      })
  }, [searchText]);


  return (
    <div className="">
      <Navbar searchText={searchText} handleSearch={setSearchText} />
      <div className="shelve py-3 pt-20 flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold">All Books</h2>
        <hr className='w-full' />
        <hr />
        <hr />
        <div className='mt-3 flex flex-col justify-center md:items-center gap-3 w-screen'>
          {/* {bookList.length == 0 ? "Not Present" : "Present"} */}
          {bookList.length == 0 ? "" : bookList.map(book => <Book bookDetails={book} key={Math.random() * 10} openDeleteModal={setDeleteModal} bookList={bookList} hanldeBookList={setBookList} />)}

        </div>
        <button className="fixed bottom-10 right-10
         bg-blue-500 text-white hover:bg-black p-2 rounded-md"
          onClick={() => {
            setAddButton(prevState => !prevState)
            // console.log(addButton)
          }}
        >
          Add Book
        </button>
      </div>
      <AddBook openAddFormBtn={addButton} handleAddForm={setAddButton} handleBookList={setBookList} />
      <Deleted deleteModal={deleteModal} handleDeleteModal={setDeleteModal} />
    </div>
  )
}

export default App
