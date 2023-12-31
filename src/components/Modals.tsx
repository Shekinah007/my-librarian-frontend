
const DeletedModal = ({ deleteModal, handleDeleteModal, handleSpinner }: any) => {

    return (
        <div>
            {/* <div className={`
            h-screen w-screen bg-black opacity-30 duration-300 fixed top-0 scale-100
            ${!deleteModal && '-scale-0 opacity-0'}`
            }></div> */}
            <div className={` z-20
        rounded-lg h-[180px] w-[250px] bg-red-200 flex flex-col 
        items-center justify-center gap-6 duration-300 fixed top-1/2 
        left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        ${!deleteModal && "scale-0 opacity-100 "}`}>

                <p className="text-lg font-semibold">Deleted Successfully</p>
                <button
                    className="bg-blue-500 text-white p-2 px-6 rounded-lg"
                    onClick={() => {
                        handleDeleteModal(false)
                        handleSpinner(false)
                    }}
                >
                    OK
                </button>
            </div >
        </div>
    )
}



const AddedModal = ({ handleSpinner }: any) => {
    return (

        <div>
            <p>Book Added!</p>
            <button onClick={() => handleSpinner(false)}>OK</button>
        </div >
    )
}

export { AddedModal }

export default DeletedModal
