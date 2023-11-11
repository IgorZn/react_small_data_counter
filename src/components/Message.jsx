import React from 'react';

function Message(props) {
    const {count, step} = props

    let currentDate = new Date()
    let newDate = undefined || currentDate
    const message = (count) => {
        if (count >= 1) {
            newDate = currentDate.setDate(newDate.getDate() + count)
            return <p>{count} days from today {new Date(newDate).toDateString()}</p>
        }

        if (count === 0) {
            return <p>Today is {currentDate.toDateString()}</p>
        }

        if (count < 0) {
            newDate = currentDate.setDate(newDate.getDate() + count)
            return <p>{count} days ago was {new Date(newDate).toDateString()}</p>
        }
    }


    return (
        <>
            <div className="message alert alert-light">
                {message(count)}
            </div>
        </>
    );
}

export default Message;