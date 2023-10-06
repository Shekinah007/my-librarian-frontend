
// type BookInfo = {
//     bookDetails: 
// }
// const Book: React.FunctionComponent<BookInfo> = ({ bookDetails }: any):  => {


const Book = ({ bookDetails, hanldeBookList, openDeleteModal }: any) => {



    return (
        <div className="book flex flex-col justify-between items-start h-[170px] rounded-md p-2 bg-gray-400/20">
            <div>
                <h3 className="text-sm font-bold">{bookDetails.title}</h3>
                <p className="text-sm font-semibold">{bookDetails.author}</p>
                <p className="text-gray-500 font-semibold text-sm">{bookDetails.releaseDate}</p>
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
                                // alert("Delete Successful")
                                openDeleteModal(true)
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