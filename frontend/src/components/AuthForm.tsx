import React from 'react';
import '../assets/style/AuthForm.css';

const AuthForm: React.FC = () => {
    const handleGoogleSignUp = () => {
        alert('Googleアカウントで登録がクリックされました');
    };

    return (
        <div className="auth-form-container">
            <h2>新規登録</h2>
            <button className="google-signup-button" onClick={handleGoogleSignUp}>
                Googleアカウントで登録
            </button>
        </div>
    );
};

export default AuthForm;
