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
        default:
            return state;
    }
};

export default listReducer;