import React from "react";
import "../assets/style/AuthForm.css";
import { useNavigate } from "react-router-dom";

const AuthForm: React.FC = () => {
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    //alert('Googleアカウントで登録がクリックされました');
    navigate("/Menu");
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
