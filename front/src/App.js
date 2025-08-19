import React, {useState} from 'react';
import './styles/globals.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import YoutubeGrid from "./components/YoutubeGrid";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    const handleSearch = () => {
        console.log("검색 실행:", query);
        setSearchTerm(query); // YoutubeGrid에 전달
    };

    const home = () => {
        setQuery("");
        setSearchTerm("")
    };

    return (
        <>
            <Header
                onMenuClick={toggleSidebar}
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
                onLogoClick={home}
            />
            <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
                <Sidebar />
                <main className="main-content">
                    <YoutubeGrid searchQuery={searchTerm} />
                </main>
            </div>
        </>
    );
}



export default App;
