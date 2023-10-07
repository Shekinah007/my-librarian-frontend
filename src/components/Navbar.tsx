import { } from 'react'

const Navbar = ({ handleSearch }: any) => {
    return (
        <div className="navbar bg-blue-600 flex w-full justify-between items-center h-[65px] px-4 py-2 fixed">
            <h1 className='text-xl font-semibold text-white'>My Librarian</h1>
            <div className="flex gap-3">
                {/* <button>List All Books</button> */}
                <div>
                    {/* <button className='mr-2 text-white text-semibold text-lg'>Q</button> */}
                    <label htmlFor="search"></label>
                    <input
                        id="search"
                        type="text" placeholder="search by title or author"
                        className="h-[30px] rounded-md p-2 bg-gray-100 max-w-[200px]"
                        onChange={(event) => {
                            handleSearch(event.target.value)
                            console.log("Event!!!")
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar