import React from 'react';
import './TrelloList.styles.css';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const TrelloList = ({title, cards, listID}) => {
    return(
        <div className="listContainer">
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard key={card.id} text={card.text} />
            ))}
            <TrelloActionButton listID={listID} />
        </div>
    )
};

export default TrelloList;