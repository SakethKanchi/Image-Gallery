const ImageGallery = () => {
    return (
        <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src='' alt="Shoes" /></figure>
                <div className="card-body">
                    {/* <h2 className="card-title">Title:</h2> */}
                    <p className="text-bold text-xl">Title: </p>
                    <span>Description:</span>
                </div>
            </div>
        </div>
    )
}

export default ImageGallery