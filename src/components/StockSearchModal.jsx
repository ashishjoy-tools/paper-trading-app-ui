import { initialState } from '../state';
import { useState } from "react";
import '../styles/searchSection.css';

const SearchBar = (props) => {
    return <input
        placeholder='search stock'
    />
}

const PercentageChange = ({ change }) => {
    if (change > 0) {
        return <span className='percentage-change profit'>{change}%</span>
    } else {
        return <span className='percentage-change loss'>{-1 * change}%</span>
    }
}

const StockTR = ({ symbol, currentValue, percentageChange }) => {
    return <div className='stock-tr'>
        <span className='symbol'>{symbol}</span>
        <span className='current-value'>{currentValue}</span>
        <PercentageChange change={percentageChange} />
        <button>Buy</button>
    </div>
}

const StockSearchTableHeader = (props) => {
    return <div className='stock-tr-header' >
        <span className='symbol'>Stock</span>
        <span style={{fontWeight: 'bold'}}>Current Value</span>
        <span style={{ fontWeight: 'bold' }}>Change from previous day</span>
    </div>
}

const StockSearchSection = (props) => {
    const [state, updateState] = useState(initialState)

    return <div className='stock-search-section'>
        <SearchBar />
        <StockSearchTableHeader />
        {state.stocksGist.map(stockDetail => <StockTR {...stockDetail} key={stockDetail.symbol} />)}
    </div>
}

export default StockSearchSection;