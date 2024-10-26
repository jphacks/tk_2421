import '../assets/style/Menu.css';
import { useNavigate } from 'react-router-dom';

function Menu () {

    const navigate = useNavigate();

    const handleEntry = () => {
        navigate('/entry');
    }

    const handleCreateTournament = () => {
        navigate('/create-tournament');
    }

    const handleShowTournament = () => {
        navigate('/show-tournament')
    }

    return (
        <div className="home-container">
            <h2>大会管理システム</h2>
            <div className="button-group">
                <button onClick={handleEntry}>エントリーする</button>
                <button onClick={handleCreateTournament}>トーナメントを作成する</button>
                <button onClick={handleShowTournament}>トーナメントを表示する</button>
            </div>
        </div>
    );
};

export default Menu;
