import { useState } from "react";



const Pagination =()=>{
    const PageNumberINCHandler=()=>{
        setPageNumber(pageNumber+1)
    }

    const PageNumberDESHandler=()=>{
        setPageNumber(pageNumber+1)
    }

    const [pageNumber,setPageNumber]=useState(0)
    return (
        <div>
            <button onClick={PageNumberINCHandler}>PREV</button>
                <p>{pageNumber} of 20</p>
            <button onClick={PageNumberDESHandler}>NEXT</button>
        </div>
    );
}

export default Pagination;