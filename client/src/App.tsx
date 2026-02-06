import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@navigation/routes/routes';
import AuthPage from '@features/auth/pages/AuthPage';
import ProfilePage from '@features/profile/pages/ProfilePage';
import SettingsPage from '@features/settings/pages/SettingsPage';
import BoardPage from '@features/board/pages/BoardPage';
import LandingPage from '@features/landing/pages/LandingPage';
import WorkspacePage from '@features/workspace/pages/WorkspacePage';
import DashboardPage from '@features/dashboard/pages/DashboardPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.AUTH} element={<AuthPage />} />
                <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
                <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
                <Route
                    path={`${ROUTES.WORKSPACE}/:spaceName`}
                    element={<WorkspacePage />}
                />
                <Route
                    path={`${ROUTES.BOARD}/:boardName`}
                    element={<BoardPage />}
                />
                <Route path={ROUTES.HOME} element={<AuthPage />} />
                <Route path={ROUTES.NOT_FOUND} element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
