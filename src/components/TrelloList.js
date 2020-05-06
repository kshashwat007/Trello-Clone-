import React from 'react';
import './TrelloList.styles.css';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import {Droppable} from 'react-beautiful-dnd';

const TrelloList = ({title, cards, listID}) => {
    return(
        <Droppable droppableId={String(listID)}>
            {provided => (
                <div 
                    {...provided.droppableProps} 
                    ref={provided.innerRef} 
                    className="listContainer"
                >
                <h4>{title}</h4>
                {cards.map((card, index) => (
                    <TrelloCard key={card.id} index={index} text={card.text} id={card.id}/>
                ))}
                <TrelloActionButton listID={listID} />
                {provided.placeholder}
            </div>
            )}
        </Droppable>
    )
};

export default TrelloList;