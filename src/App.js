import './App.css';
import AppHeader from "./components/AppHeader";
import Portfolio from './components/Portfolio';
import StockSearchSection from "./components/StockSearchModal";

function App() {
    return (
        <div className="App">
            <AppHeader />
            <div className='app-body'>
                <StockSearchSection />
                <Portfolio />
            </div>
            
        </div>
    );
}

export default App;
