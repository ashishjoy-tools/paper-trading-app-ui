import { Button, ButtonGroup, Card, CardActions, CardContent, Typography } from '@mui/material';
import * as React from 'react';
import '../styles/StockCard.css';

const ROI = ({ value, title, suffix }) => {
    const changed = value < 0 ? <Typography sx={{ color: '#f23645' }}>{-1 * value}{suffix}</Typography> : <Typography sx={{ color: '#089981' }}>{value}{suffix}</Typography>
    return <div style={{ display: 'flex' }}>
        <span style={{
            display: 'flex',
            marginRight: '5px',
            paddingTop: '2px',
        }}>{title}</span>
        {changed}
    </div>
}

const StockCard = (props) => {

    return <Card sx={{
        width: '300px',
        margin: '5px'
    }}>
        <CardContent>
            <Typography component='div' variant='h7' sx={{ fontWeight: 'bold', marginBottom: '15px' }}>
                {props.name}({props.symbol})
            </Typography>
            <Typography sx={{display: 'flex'}}>
                Current Price: {props.currentValue}
            </Typography>
            <ROI value={props.return} title='Return :' />
            <ROI value={props.returnPercentage} title='Percentage Changed:' suffix='%' />

        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonGroup aria-label="outlined primary button group">
                <Button>Buy</Button>
                <Button>Sell</Button>
            </ButtonGroup>
        </CardActions>
    </Card>
    // return <div className='stock-card'>
    //     <div className='stock-name'>{props.name}({props.symbol})</div>
    //     <div>{props.currentValue}</div>
    //     <div>{props.return}</div>
    //     <div>{props.returnPercentage}</div>
    //     <div className='buy-sell'>
    //         <button className='buy-btn'>Sell</button>
    //         <button className='sell-btn'>Buy</button>
    //     </div>

    // </div>
}

export default StockCard;