import  {CONSTANTS} from '../actions/rootActions'


export const addCard = (listID, text) => {
    return{
        type: CONSTANTS.ADD_CARD,
        payload: {text, listID}
    };
};