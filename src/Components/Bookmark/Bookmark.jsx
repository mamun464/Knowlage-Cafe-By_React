/* eslint-disable no-unused-vars */


// eslint-disable-next-line react/prop-types
const Bookmark = ({ bookmark }) => {
    // eslint-disable-next-line react/prop-types
    const { title } = bookmark;
    return (
        <div className="bg-[#FFF] p-5 m-4 rounded-xl drop-shadow-lg">
            <h3 className="text-[#111] text-xl font-semibold">{title}</h3>
        </div>
    );
};

export default Bookmark;