import * as dateFns from 'date-fns';

export const timeDistanceToNowInWords = date => {
    if (!date) return;

    const config = {
        addSuffix: true
    };

    return dateFns.formatDistanceToNow(new Date(date), config);
}

export const formatDate = date => {
    if (!date) return;

    const dateObj = new Date(date);

    const isToday = dateFns.isToday(dateObj);

    if (isToday) return dateFns.format(
        dateObj,
        `'today, at' HH:mm`
    );

    const isYesterday = dateFns.isYesterday(dateObj);

    if (isYesterday) return dateFns.format(
        dateObj,
        `'yesterday, at' HH:mm`
    );

    return dateFns.format(
        dateObj,
        `MMM do yyyy', at' HH:mm`
    );
}