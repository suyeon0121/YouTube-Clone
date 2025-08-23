import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const clientId = "431630174589-g0qp96uhcvhi2uailde0imprjljmb8be.apps.googleusercontent.com";

    const handleSuccess = (credentialResponse) => {
        setIsLoggedIn(true);
        navigate('/'); // 홈으로 이동
    };

    const handleFailure = () => {
        console.log("로그인 실패");
    };

    return (
        <div className="login-page">
            <GoogleOAuthProvider clientId={clientId}>
                <div className="login-box">
                    <h2 className="login-title">로그인</h2>
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onError={handleFailure}
                    />
                </div>
            </GoogleOAuthProvider>
        </div>
    );
}

export default LoginPage;
