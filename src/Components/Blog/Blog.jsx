
import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
    // console.log(blog);
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover of ${title}`} />

            <div className='flex justify-between items-center mb-4'>

                <div className='flex items-center'>

                    <img className='h-14 w-14' src={author_img} alt="author_img" />

                    <div className='ml-4'>

                        <h1 className='text-[#111] text-2xl font-bold'>{author}</h1>
                        <p className='text-[#11111199] font-semibold'>{posted_date}</p>

                    </div>
                </div>

                <div>

                    <span className='text-[#11111199] font-semibold text-xl flex items-center gap-2'>{reading_time} min read
                        <button><CiBookmark /></button>
                    </span>

                </div>
            </div>

            <h1 className='text-4xl font-bold text-[#111] mb-4'>{title}</h1>

            <p className='mb-5'>
                {
                    hashtags.map((hash, index) => <span
                        className='text-[#11111199] font-medium text-xl'
                        key={index}>
                        <a className='ml-2' href="">#{hash}</a>
                    </span>)
                }
            </p>
            <p>
                <a className='text-[#6047EC] font-semibold text-xl underline' href="">Mark as read</a>
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;