/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 h-fit" >
            <div className="ml-4 mt-4 rounded-lg border border-solid border-purple-600 bg-purple-600 bg-opacity-10 p-4 text-center">
                <h1 className="text-[#6047EC] text-2xl font-bold">Spent time on read : {readingTime} min</h1>
            </div>
            <div className="bg-[#1111110D] ml-4 mt-4 rounded-lg flex-1 pb-3">
                <div>
                    <h1 className="text-[#111]  text-2xl font-bold text-center p-4">BookMarked Blogs: {bookmarks.length}</h1>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark
                            key={idx}
                            bookmark={bookmark}
                        ></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;