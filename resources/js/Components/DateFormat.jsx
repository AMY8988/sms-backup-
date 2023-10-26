import React from 'react'

const DateFormat = (props) => {
    const date = new Date(props?.date);

    const month = date.toLocaleString('en-US' , {month : 'short'});
    const day = date.toLocaleString('en-US' , { day: '2-digit'});
    const year = date.getFullYear();

    return (

        <div>
            {day}-{month}-{year}
        </div>
    )
}

export default DateFormat

