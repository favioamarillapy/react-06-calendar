import moment from "moment"

export const eventsFormat = (events = []) => {

    return events.map(e => ({
        ...e,
        start: moment(e.start).toDate(),
        end: moment(e.end).toDate()
    }));
}