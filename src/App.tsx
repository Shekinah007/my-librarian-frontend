import { ReactElement, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Book from './components/Book'
import AddBook from './components/AddBook'
import { Puff } from 'react-loader-spinner'
import DeletedModal from './components/Modals'

function App(): ReactElement {

  const [searchText, setSearchText] = useState<String>("")
  const [bookList, setBookList] = useState([])
  const [addButton, setAddButton] = useState<Boolean>(false)
  const [deleteModal, setDeleteModal] = useState<Boolean>(false)
  const [spinner, setSpinner] = useState<Boolean>(false);


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
    setSpinner(true)
    fetch("https://mylibrarian.zeabur.app/library/book/findBook", {
      method: "POST",
      body: JSON.stringify({ searchText: searchText }),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      setSpinner(false)
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
      <div className={`fixed z-10 ${!spinner && "hidden"} x-col 
        items-center justify-center gap-6 
        duration-300 top-1/2 left-1/2 transform -translate-x-1/2 
        -translate-y-1/2 bg-black/20 h-screen 
        w-screen flex justify-content item-center text-white `}>
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#1999"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
      {/* <div className={`
            h-screen w-screen bg-black opacity-30 duration-300 fixed top-0 scale-100
            ${!deleteModal && '-scale-0 opacity-0'}`
      }></div> */}
      <Navbar searchText={searchText} handleSearch={setSearchText} />
      <div className="shelve py-3 pt-20 flex flex-col justify-center items-center">
        {/* <h2 className="text-lg font-semibold self-start mt-3 text-gray-500 sticky top-[46px] pl-4 bg-white w-[1000px]">All Books</h2> */}
        <hr className='w-full' />
        <hr />
        <hr />

        <div className='mt-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center md:items-center gap-2 px-4 w-screen'>
          {/* {bookList.length == 0 ? "Not Present" : "Present"} */}
          {bookList.length == 0 ? "" : bookList.map(book =>
            <Book bookDetails={book} key={Math.random() * 10}
              openDeleteModal={setDeleteModal}
              bookList={bookList}
              hanldeBookList={setBookList}
              handleSpinner={setSpinner}

            />)}

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
      <AddBook
        openAddFormBtn={addButton}
        handleAddForm={setAddButton}
        handleBookList={setBookList}
        handleSpinner={setSpinner}
      />
      <DeletedModal deleteModal={deleteModal} handleDeleteModal={setDeleteModal} handleSpinner={setSpinner} />
    </div>
  )
}

export default App
