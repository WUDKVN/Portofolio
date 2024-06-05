import React, { useState } from 'react'

function ReadMore({ text }) {
    const [showFullText, setShowFullText] = useState(false);

    const renderText = () => {
        if (showFullText || text.length < 200) {
            return text;
        }
        return `${text.slice(0, 200)}...`;
    };

    return (
        <div>
            {renderText()}
            {text.length > 200 && (
                <>
                    <br />
                    <button
                        className='bg-black text-white px-10 py-2 my-2 rounded-full hover:bg-blue-900 hover:text-white'
                        onClick={() => setShowFullText(!showFullText)}>
                        {showFullText ? ' Show less' : ' Show more'}
                    </button>
                </>

            )}
        </div>
    )
}

export default ReadMore;