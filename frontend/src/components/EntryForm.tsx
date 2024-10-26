import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/style/EntryForm.css';

const EntryForm: React.FC = () => {
    const [playerName, setPlayerName] = useState<string>('');

    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`エントリーされた選手名: ${playerName}`);
        setPlayerName(''); // フォームをリセット
        navigate('/tournament');
    };

    

    return (
        <div className="entry-form-container">
            <h2>大会エントリーフォーム</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    選手の氏名:
                    <input 
                        type="text" 
                        value={playerName} 
                        onChange={handleInputChange} 
                        placeholder="氏名を入力" 
                        required 
                    />
                </label>
                <button type="submit">エントリー</button>
            </form>
        </div>
    );
};

export default EntryForm;
