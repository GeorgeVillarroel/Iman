import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './features/auth/pages/AuthPage';
import ProfilePage from './features/profile/pages/ProfilePage';
import SettingsPage from './features/settings/pages/SettingsPage';
import BoardPage from './features/board/pages/BoardPage';
import DashboardPage from './features/dashboard/pages/DashboardPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/board" element={<BoardPage />} />
                <Route path="/" element={<AuthPage />} />
                <Route
                    path="*"
                    element={<div>Page Not Found - Check your URL</div>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
