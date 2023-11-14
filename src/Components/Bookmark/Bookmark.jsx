/* eslint-disable no-unused-vars */


// eslint-disable-next-line react/prop-types
const Bookmark = ({ bookmark }) => {
    // eslint-disable-next-line react/prop-types
    const { title } = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;