import React from "react";
import "../assets/style/AuthForm.css";
import { useNavigate } from "react-router-dom";

const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const handleSignInSignUp = () => {
    navigate("/Menu");
  };
    return (
        <div className="auth-form-wrapper">
            <h1 className="app-title">らくらくトーナメント</h1>
            <div className="auth-form-container">
                <h4>大会へのエントリーやトーナメントの簡単作成が可能です。</h4>
                <button className="signin-signup-button" onClick={handleSignInSignUp}>
                    サインイン/サインアップはこちら
                </button>
            </div>
        </div>
    );
};

export default AuthForm;
