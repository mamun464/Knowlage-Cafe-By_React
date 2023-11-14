

import './App.css'
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  const [bookmarks, setBookMarks] = useState([]);

  const handleAddToBookmarks = blog => {
    console.log("bookmarks Coming soon");
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
