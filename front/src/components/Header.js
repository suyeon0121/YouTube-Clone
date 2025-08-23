import React from "react";
import '../styles/globals.scss'

function Header({ onMenuClick, query, setQuery, onSearch, onLogoClick, onProfileClick }) {
    return (
        <header className="header">
            <button className="menu-btn" onClick={onMenuClick} aria-label="메뉴 열기">
                &#9776;
            </button>
            <div className="logo" onClick={onLogoClick} style={{ cursor: "pointer" }}>
                YouTube
            </div>
            <form className="search-bar" onSubmit={(e) => { e.preventDefault(); onSearch(query); }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="검색"
                />
                <button type="submit">🔍</button>
            </form>
            <div className="profile-icon" onClick={onProfileClick} style={{ cursor: "pointer" }}></div>
        </header>
    );
}


export default Header;
