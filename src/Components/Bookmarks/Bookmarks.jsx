/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:1/3 bg-gray-300 ml-4 mt-4 rounded-lg">
            <h1 className="text-3xl text-center p-4">BookMarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark
                    key={idx}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;