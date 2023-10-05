import { useState } from "react";

const AddBook = ({ openAddFormBtn, handleAddForm }: any) => {


    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [immageLink, setImageLink] = useState("")


    const handleSubmit = async (e: any) => {
        e.preventDefault()

        fetch("http://localhost:3000/library/book/addBook", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                author: author,
                releaseDate: releaseDate,
                imageLink: immageLink
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                console.log(res)
                if (res.ok) {
                    // console.log("Success")
                    alert("Book added successfully")
                    return res.json()
                } else {
                    alert("An error has occurred. Check console for details.")
                    // console.log(res)
                }
            })
    }

    return (
        <div className={`fixed top-1/2 left-1/2 duration-300 ${!openAddFormBtn && "top-[1500px]"} transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-white rounded-md p-5`}>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 items-center justify-center">
                <div className="flex flex-col gap-2">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" placeholder="Book title"
                        className="p-1 rounded-sm text-black"
                        onChange={e => { setTitle(e.target.value) }}
                    />
                </div >
                <div className="flex flex-col gap-2">
                    <label htmlFor="author">Author</label>
                    <input id="author" type="text" name="author" placeholder="Book author"
                        className="p-1 rounded-sm text-black"
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input id="releaseDate" type="text" name="releaseDate" placeholder="Date/Year of Release"
                        className="p-1 rounded-sm text-black"
                        onChange={(e) => setReleaseDate(e.target.value)}
                    />
                </div  >
                <div className="flex flex-col gap-2">
                    <label htmlFor="imageLink">Image URL</label>
                    <input id="imageLink" type="text" name="imageLink" placeholder="Image URL"
                        className="p-1 rounded-sm text-black"
                        onChange={(e) => { setImageLink(e.target.value) }}
                    />
                </div>
                <div className="flex gap-3">
                    <button className="rounded-md p-2 bg-green-500 w-[70px]" type="submit" >Add</button>
                    <button className="rounded-md p-2 bg-red-500 w-[70px]" type="button" onClick={() => { handleAddForm(false) }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddBook