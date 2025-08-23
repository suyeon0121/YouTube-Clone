import React from "react";
import '../styles/globals.scss'

function Sidebar() {
    return (
        <aside className="sidebar">
            <ul className="menu-list">
                <li className="home" onClick={() => console.log("홈 클릭")}>
                    <img src="/home.png" alt="홈 아이콘" className="icon"/>
                    <span>홈</span>
                </li>
                <li className="short" onClick={() => console.log("Shorts 클릭")}>
                    <img src="/shorts.png" alt="shorts 아이콘" className="icon"/>
                    <span>Shorts</span>
                </li>
                <li className="subscription" onClick={() => console.log("구독 클릭")}>
                    <img src="/subscribe.png" alt="구독 아이콘" className="icon"/>
                    <span>구독</span>
                </li>
            </ul>

            <hr className="divider"/>

            <ul className="menu-list">
                <div className="section-title">내 페이지 &gt;</div>
                <li className="record" onClick={() => console.log("시청 기록 클릭")}>
                    <img src="/recode.png" alt="시청 기록 아이콘" className="icon"/>
                    <span>시청 기록</span>
                </li>
                <li className="record" onClick={() => console.log("나중에 볼 동영상 클릭")}>
                    <img src="/time.png" alt="시청 기록 아이콘" className="icon"/>
                    <span>나중에 볼 동영상</span>
                </li>
                <li className="like" onClick={() => console.log("좋아요 표시 클릭")}>
                    <img src="/like.png" alt="시청 기록 아이콘" className="icon"/>
                    <span>좋아요 표시한 동영상</span>
                </li>
            </ul>

            <hr className="divider"/>
            <div className="section-title-no">구독</div>

            <ul className="subscription-list">
                <li>
                    <a href="https://github.com/suyeon0121" target="_blank" rel="noopener noreferrer">
                        <img src="/Github.png" alt="깃허브 아이콘" className="icon"/>
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.notion.so/249d71628a0f80229693f0ed55f69b8a?source=copy_link" target="_blank" rel="noopener noreferrer">
                        <img src="/notion.png" alt="노션 아이콘" className="icon"/>
                        <span className="channel-name">Notion</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;