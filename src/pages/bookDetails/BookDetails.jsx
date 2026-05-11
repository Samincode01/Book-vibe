import React, { use } from 'react';
import { useParams } from 'react-router';

const booksPromise = fetch('/booksData.json')
  .then((res) => res.json());

const BookDetails = () => {

    const { bookId } = useParams();

    const books = use(booksPromise);

    const expectedBook = books.find(
        (book) => book.bookId == bookId
    );

    if (!expectedBook) {
        return (
            <div className="text-center mt-20 text-2xl font-bold">
                Loading...
            </div>
        );
    }

    return (
        <div className="container mx-auto my-12 px-4">

            <div className="card lg:card-side bg-base-100 shadow-xl">

                {/* Image Section */}
                <figure className="p-6 bg-gray-100 lg:w-1/2">
                    <img
                        src={expectedBook.image}
                        alt={expectedBook.bookName}
                        className="h-[500px] w-full object-cover rounded-xl"
                    />
                </figure>

                {/* Content Section */}
                <div className="card-body lg:w-1/2">

                    <h2 className="card-title text-4xl font-bold">
                        {expectedBook.bookName}
                    </h2>

                    <p className="text-lg font-semibold text-gray-600">
                        By : {expectedBook.author}
                    </p>

                    <div className="border-y py-4 my-4">
                        <p className="font-semibold">
                            Category : {expectedBook.category}
                        </p>
                    </div>

                    {/* Review */}
                    <div>
                        <span className="font-bold text-lg">
                            Review :
                        </span>

                        <p className="mt-2 text-gray-600 leading-7">
                            {expectedBook.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-3 flex-wrap mt-5">

                        <span className="font-bold">
                            Tag
                        </span>

                        {
                            expectedBook.tags.map((tag, ind) => (
                                <div
                                    key={ind}
                                    className="badge bg-green-100 text-green-600 border-none px-4 py-3"
                                >
                                    #{tag}
                                </div>
                            ))
                        }

                    </div>

                    {/* Extra Info */}
                    <div className="mt-6 space-y-3">

                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">
                                Number of Pages:
                            </span>

                            <span className="font-semibold">
                                {expectedBook.totalPages}
                            </span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">
                                Publisher:
                            </span>

                            <span className="font-semibold">
                                {expectedBook.publisher}
                            </span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">
                                Year of Publishing:
                            </span>

                            <span className="font-semibold">
                                {expectedBook.yearOfPublishing}
                            </span>
                        </div>

                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-500">
                                Rating:
                            </span>

                            <span className="font-semibold">
                                {expectedBook.rating}
                            </span>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="card-actions mt-8">

                        <button className="btn btn-outline">
                            Read
                        </button>

                        <button className="btn btn-primary">
                            Wishlist
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BookDetails;