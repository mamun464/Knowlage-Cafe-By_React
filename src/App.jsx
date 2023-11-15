

import './App.css'
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = (readTime, markAsReadID) => {
    setReadingTime(readingTime + readTime);
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== markAsReadID);
    setBookmarks(remainingBookmark)

  }

  const handleAddToBookmarks = (blog) => {
    const newList = [...bookmarks, blog];
    setBookmarks(newList);
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs
            handleAddToBookmarks={handleAddToBookmarks}
            handleReadingTime={handleReadingTime}></Blogs>

          <Bookmarks bookmarks={bookmarks}
            readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
