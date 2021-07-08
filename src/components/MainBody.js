import React from 'react'
import Filters from './Filters'
import Results from './Results'
import Pagination from './Pagination'

const MainBody = () =>{
    return(
        <main className="products">
            <header className="heading">
                <h1>Sale on Guitars</h1>
            </header>
            <Filters />
            <Results />
            <Pagination />
        </main>
    )
}

export default MainBody