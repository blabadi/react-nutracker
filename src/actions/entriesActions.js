import entryRepo from '../repos/EntryRepo';
export const LOAD_ENTIRES = 'LOAD_ENTIRES';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const RECEIVE_ENTRY = 'RECEIVE_ENTRY'
export const INIT_CREATE_ENTRY = 'INIT_CREATE_ENTRY'

export const fetchEntries = (start, end) => (dispatch) => {
    dispatch(loadEntries(start, end)); 
    return entryRepo.find(start, end)
        .then(entries => { 
                dispatch(receiveEntries(start, end, entries))
            }
        );
};

export const loadEntries = (start, end) => ({
    type: LOAD_ENTIRES,
    start,
    end
});

export const createEntry = (entry) => dispatch => {
    dispatch(initCreateEntry(entry)); 
    return entryRepo.create(entry)
        .then(entry => { 
                dispatch(receiveEntry(entry))
            }
        );
}

export const initCreateEntry = (entry) => ({
    type: INIT_CREATE_ENTRY,
    entry
});

export const receiveEntry = (entry) => ({
    type: RECEIVE_ENTRY,
    entry: entry
});

export const receiveEntries =  (start, end, entries) => ({
    type: RECEIVE_ENTRIES,
    start,
    end,
    entries
  });


