/**
 * Convert date object to dd/mm/yyyy
 * @param {Date} date - Date object
 * @returns {string} Date string in dd/mm/yyyy format
 */
export function convertFromDate(date: Date) {
    const dateObj = new Date(date)
    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1
    const year = dateObj.getFullYear()
    return `${day}/${month}/${year}`
}

/**
 * Convert date string to date object
 * @param {string} dateString - Date string in dd/mm/yyyy format
 * @returns {Date} Date object
 */
export function convertToDate(dateString: string) {
    const dateParts = dateString.split('/').map((part) => parseInt(part))
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
}
