
// type BookInfo = {
//     bookDetails: 
// }
// const Book: React.FunctionComponent<BookInfo> = ({ bookDetails }: any):  => {

const Book = ({ bookDetails, hanldeBookList, openDeleteModal, handleSpinner }: any) => {



    return (
        <div className="book flex flex-col relative justify-between max-w-[200px] items-start h-[170px] rounded-md p-2 bg-gray-400/20" >

            {/* <hr className=" self-start justify-self-start bg-black w-screen transform rotate-90" /> */}
            <div className="bg-gray-400  left-2 h-[155px] w-[2px] absolute"></div>
            {/* <div> */}
            <div className="ml-3">
                <h3 className="text-sm font-bold">{bookDetails.title}</h3>
                <p className="text-xs text-gray-500 font-semibold">{bookDetails.author}</p>
                <p className="text-gray-500 font-semibold text-sm">{bookDetails.releaseDate}</p>
            </div>
            <div className="ml-3">

                <button className="flex flex-col justify-between h-[40px]"
                    onClick={() => {
                        handleSpinner(true)
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
                    <span className="fa-stack fa-lg text-gray-300 text-[18px]">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-trash-o fa-stack-1x text-red-400 fa-inverse "></i>
                    </span>
                </button>
                <hr className="justify-start w-[80px] bg-black" />
            </div>
            {/* </div> */}

        </div >
    )
}

export default Book