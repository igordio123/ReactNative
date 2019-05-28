const initialState = {
  tasks:[
    ]

};
const update = (task,id) => {
  const itemId = task.findIndex(item=>{
    return item.key === id;
  });
   return [
     ...task.slice(0,itemId),
    {...task[itemId],checked:!task[itemId].checked},
     ...task.slice(itemId+1),
]
};
const remove = (task , id ) => {
  const itemId = task.findIndex(item=>{
    return item.key === id;
  });
  return [
    ...task.splice(0, itemId),
    ...task.splice( itemId + 1)
  ]


};
const reducer = (state = initialState,action) => {
  switch(action.type) {
    case 'ADD_NEW_ITEM':
      return {
        ...state,
        tasks:[...state.tasks,action.payload]
      };
    case 'DONE':
      return {
        ...state,
        tasks:update(state.tasks,action.payload)
      };
    case 'REMOVE':
      return {
        ...state,
        tasks:remove(state.tasks,action.payload)
    };

    default:
      return state;

  }
};

export default reducer
