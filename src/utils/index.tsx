export const getDateFormat = (date: string): string => {
    const gdate = new Date(date)
    const year = gdate.getFullYear()
    const month = gdate.getMonth()
    const day = gdate.getDate() >= 10 ? gdate.getDate() : '0' + gdate.getDate()
    return year + '-' + month + '-' + day
}