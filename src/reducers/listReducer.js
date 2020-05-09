import  { CONSTANTS } from '../actions/rootActions'; 

let listID = 2; 
let CardID = 0;

const initialState = [
    {
        title: "Hello",
        id: `list-${0}`,
        cards: [
           
            
        ]
    },
    {
        title: "Second list",
        id: `list-${1}`,
        cards: [
           
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            }
            listID += 1;
            return[...state, newList];

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id:  `card-${CardID}`
            }
            CardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                    return{
                        ...list,
                        cards: [...list.cards, newCard]
                    };
                } else {
                    return list;
                }
            });
               
            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED:

            const {droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId, type} = action.payload;

            const newState = [...state];

            //dragging list 
            if(type === "list"){
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            //In same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd,0,...card);
            }

            // In other list
            if(droppableIdStart !== droppableIdEnd){
                const listStart = state.find(list => droppableIdStart === list.id)

                //pull out the card
                const card = listStart.cards.splice(droppableIndexStart, 1);

                //find the list wherer drag ended
                const listEnd = state.find(list => droppableIdEnd === list.id);

                //put the card in the new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }

            return newState;

        default:
            return state;
    }
};

export default listReducer;