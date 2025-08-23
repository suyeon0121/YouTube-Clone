import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import './styles/globals.scss';
import LoginPage from "./components/LoginPage";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import YoutubeGrid from "./components/YoutubeGrid";

// Router 안에서 navigate를 사용할 수 있는 별도 컴포넌트로 분리
function AppContent() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const handleSearch = () => {
        setSearchTerm(query);
    };

    const home = () => {
        setQuery("");
        setSearchTerm("");
        navigate("/");  // 홈으로 이동
    };

    return (
        <>
            <Header
                onMenuClick={toggleSidebar}
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
                onLogoClick={home}  // 홈으로 이동 시 검색 초기화
                onProfileClick={() => { window.location.href = "/login"; }}
            />
            <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <Sidebar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<YoutubeGrid searchQuery={searchTerm} />} />
                        <Route
                            path="/login"
                            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}/>
                    </Routes>
                </main>
            </div>
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
