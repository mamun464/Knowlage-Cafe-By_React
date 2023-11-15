import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handleAddToBookmarks, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className="md:w-2/3  mt-4">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    handleAddToBookmarks={handleAddToBookmarks}
                    blog={blog}
                    handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blogs;