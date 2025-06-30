import React from 'react';
import s from './search.module.css';

const Search = () => {
    return (
        <section className={s.search}>
        <form action="" className={s.searchForm}>
            <div className="inputField">
                <input id="searchId" type="text" placeholder="Search..." />
                <label htmlFor="searchId">Search...</label>
            </div>
        <button type="submit" className="searchButton">
            Count is
        </button>
        </form>
        </section>
    );
};

export default Search;