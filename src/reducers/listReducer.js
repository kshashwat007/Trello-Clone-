import  { CONSTANTS } from '../actions/rootActions'; 

let listID = 2; 
let CardID = 5;

const initialState = [
    {
        title: "Hello",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "this is a random text to test "
            },
            {
                id:  `card-${1}`,
                text: "this is a random text to test the"
            },
        ]
    },
    {
        title: "Second list",
        id: `list-${1}`,
        cards: [
            {
                id:  `card-${2}`,
                text: "this is a random text to test "
            },
            {
                id:  `card-${3}`,
                text: "this is a random text to test the"
            },
            {
                id:  `card-${4}`,
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
                id: `list-${listID}`
            }
            listID += 1;
            return[...state, newList];

        case CONSTANTS.ADD_CARD:
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

        default:
            return state;
    }
};

export default listReducer;