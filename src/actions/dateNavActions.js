export const PERIOD_CHANGED = 'PERIOD_CHANGED';

export const changePeriod = (from, to) => ({
    type: PERIOD_CHANGED,
    from,
    to
});
