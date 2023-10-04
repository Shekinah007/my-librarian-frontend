import React, { ReactElement } from 'react'

const Navbar = (): ReactElement => {
    return (
        <div className="bg-blue-600 flex w-screen justify-between items-center h-16 px-2 py-1">
            <h1 className='text-2xl font-semibold text-white'>My Librarian</h1>
            <div className="flex gap-3">
                {/* <button>List All Books</button> */}
                <div>
                    <button className='mr-2 text-white text-semibold text-2xl'>Q</button>
                    <label htmlFor="search"></label>
                    <input
                        id="search"
                        type="text" placeholder="search by title or author"
                        className="h-[30px] rounded-md p-2 "
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar