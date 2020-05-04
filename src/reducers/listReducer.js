import  { CONSTANTS } from '../actions/rootActions'; 

let listID = 2; 
let CardID = 4;

const initialState = [
    {
        title: "Hello",
        id: 0,
        cards: [
            {
                id: 0,
                text: "this is a random text to test "
            },
            {
                id: 1,
                text: "this is a random text to test the"
            },
        ]
    },
    {
        title: "Second list",
        id: 1,
        cards: [
            {
                id: 0,
                text: "this is a random text to test "
            },
            {
                id: 1,
                text: "this is a random text to test the"
            },
            {
                id: 2,
                text: "this is a random text to test the"
            }
        ]
    }
]

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1;
            return[...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: CardID
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

        default:
            return state;
    }
};

export default listReducer;