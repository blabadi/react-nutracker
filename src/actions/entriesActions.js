import entryRepo from '../repos/EntryRepo';
export const LOAD_ENTIRES = 'LOAD_ENTIRES';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'


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

export const receiveEntries =  (start, end, entries) => ({
    type: RECEIVE_ENTRIES,
    start,
    end,
    entries
  });


