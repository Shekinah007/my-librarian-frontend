import React, { ReactElement } from 'react'

// type BookInfo = {
//     bookDetails: 
// }
// const Book: React.FunctionComponent<BookInfo> = ({ bookDetails }: any):  => {


const Book = ({ bookDetails }: any) => {
    return (
        <div className="book flex justify-between items-center mx-4 rounded-md p-2 bg-gray-400/20">
            <div>
                <h3 className="font-semibold text-xl">{bookDetails.title}</h3>
                <p>{bookDetails.author}</p>
                <p className="text-gray-500 font-bold text-sm">{bookDetails.releaseDate}</p>
                <hr />
            </div>
            <button className="bg-red-400 rounded-md p-1 text-white hover:bg-red-500 active:bg-red-600">Delete</button>
        </div>
    )
}

export default Book