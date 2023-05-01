import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
                <BrowserRouter>
                    <Dashboard></Dashboard>
                </BrowserRouter>
            );
