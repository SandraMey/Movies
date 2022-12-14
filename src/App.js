import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routes from './config/Routes';

function App() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <>
                    <Header />
                    <Routes/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;
