import '../styles/Portfolio.css';

const GistRow = ({ title, description }) => {
    return <div>
        <div className='gist-row'>
            <span className='gist-title'>{title}</span>
            <span className='gist-desc'>{description}</span>
        </div>
    </div>
}

const PortfolioGist = (props) => {
    const gistRows = [
        { title: 'Amount Available To Invest', description: (props.amountAvailableToInvest || 0) },
        { title: 'Investment', description: (props.investment || 0) },
        { title: 'Current Value', description: (props.currentValue || 0) },
        { title: 'Overall Returns', description: (props.overallReturns || 0) },
    ]
    return <div className='portfolio-gist'>
        {gistRows.map((r, i) => <GistRow {...r} key={i} />)}
    </div>
}

const PortfolioHeading = () => {
    return <div className='portfolio-heading'> Your Portfolio </div>
}

const Portfolio = () => {
    return <div className='portfolio-section'>
        <PortfolioHeading />
        <div>
            <PortfolioGist />
        </div>
    </div>
}

export default Portfolio;
