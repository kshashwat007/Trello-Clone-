import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './TrelloCard.styles.css';

const TrelloCard = ({text}) => {
    return(
    <Card className='cardContainer'>
      <CardContent>
          <Typography gutterBottom>
            {text}
          </Typography>
      </CardContent>
    </Card>
    )
}

export default TrelloCard;