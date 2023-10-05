import React, { ReactElement } from 'react'

// type BookInfo = {
//     bookDetails: 
// }
// const Book: React.FunctionComponent<BookInfo> = ({ bookDetails }: any):  => {


const Book = ({ bookDetails }: any) => {
    return (
        <div className="book">
            <h3 className="font-semibold text-xl">{bookDetails.title}</h3>
            <p>{bookDetails.author}</p>
            <p className="text-gray-500 font-bold text-sm">{bookDetails.releaseDate}</p>
            <hr />
        </div>
    )
}

export default Book