import React from 'react';

function Message(props) {


    let currentDate = new Date()
    let newDate = undefined || currentDate
    const {count, step} = props
    const message = (count) => {
        if (count >= 1) {
            return <p>{count} days from today {
                new Date(currentDate.setDate(currentDate.getDate() + count))
                    .toDateString()
            }</p>
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