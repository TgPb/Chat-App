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

    if (isToday) return {
        formattedDate: dateFns.format(
            dateObj,
            `'today, at' HH:mm`
        ),
        needUpdate: true
    };

    const isYesterday = dateFns.isYesterday(dateObj);

    if (isYesterday) return {
        formattedDate: dateFns.format(
            dateObj,
            `'yesterday, at' HH:mm`
        ),
        needUpdate: true
    };

    return {
        formattedDate: dateFns.format(
            dateObj,
            `MMM do yyyy', at' HH:mm`
        ),
        needUpdate: false
    };
}