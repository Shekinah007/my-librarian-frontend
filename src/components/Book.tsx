
// type BookInfo = {
//     bookDetails: 
// }
// const Book: React.FunctionComponent<BookInfo> = ({ bookDetails }: any):  => {


const Book = ({ bookDetails, bookList, hanldeBookList }: any) => {



    return (
        <div className="book flex justify-between items-center mx-4 md:w-[700px] rounded-md p-2 bg-gray-400/20">
            <div>
                <h3 className="font-semibold text-md">{bookDetails.title}</h3>
                <p>{bookDetails.author}</p>
                <p className="text-gray-500 font-bold text-sm">{bookDetails.releaseDate}</p>
                <hr />
            </div>
            <button className="bg-red-400 rounded-md p-1 text-white
             hover:bg-red-500 active:bg-red-600"
                onClick={() => {
                    // fetch(`http://localhost:3000/library/book/deleteBook/${bookDetails._id}`,
                    fetch(`https://mylibrarian.zeabur.app/library/book/deleteBook/${bookDetails._id}`,
                        {
                            method: "DELETE",
                        }
                    )
                        .then(res => {
                            if (res.ok) {
                                console.log("Delete Successful")
                                // fetch("http://localhost:3000/library/book/")
                                fetch("https://mylibrarian.zeabur.app/library/book/")
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data)
                                        hanldeBookList(data)
                                    })
                            }
                            else {
                                console.log(res)
                                alert("Delete failed")
                            }
                        })
                }}
            >
                Delete
            </button>
        </div >
    )
}

export default Book