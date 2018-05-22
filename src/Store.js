import DB from 'mishmash-db/';

const initialState = {
  currentView: 0
};

let state = new DB(initialState);
        
let actions = {
	navigate: (index) => {
		state.mutate(() => ({ currentView: index }));
	}
};

export {
	state,
	actions
};