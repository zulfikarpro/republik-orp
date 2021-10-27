import React from 'react'


const TableComponent = (props) => {
    const data = props.dataPass
    return (
        <>
            <h1>{data[0]}</h1>    

        </>
    )
}

export default TableComponent