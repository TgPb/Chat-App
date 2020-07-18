import * as dateFns from 'date-fns';

export const timeDistanceToNowInWords = date => {
    const config = {
        addSuffix: true
    };

    return dateFns.formatDistanceToNow(new Date(date), config);
}

export const formatDate = date => {
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

    const isThisYear = dateFns.isThisYear(dateObj);

    if (isThisYear) return dateFns.format(
        dateObj,
        `MMM d', at' HH:mm`
    );

    return dateFns.format(
        dateObj,
        `MMM do yyyy', at' HH:mm`
    );
}

console.log(formatDate('Tue Jul 16 2019 00:01:00'))