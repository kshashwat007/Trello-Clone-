import React from 'react';
import './TrelloList.styles.css';
import TrelloCard from './TrelloCard';

const TrelloList = ({title, cards}) => {
    return(
        <div className="listContainer">
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard text={card.text} />
            ))}
        </div>
    )
};

export default TrelloList;