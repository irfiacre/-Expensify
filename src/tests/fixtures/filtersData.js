import moment from 'moment';

export default [
    {
    text: 'bill',
    sortBy: 'date',
    startDate: moment(0).startOf('month'),
    endDate: moment(0).endOf('month'),
    },
    {
        text: 'bill',
        sortBy: 'amount',
        startDate: moment(0).startOf('month'),
        endDate: moment(0).endOf('month'),
        }
]