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
                draggableId} = action.payload;

            const newState = [...state];

            //In same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd,0,...card);
            }

            return newState;

        default:
            return state;
    }
};

export default listReducer;