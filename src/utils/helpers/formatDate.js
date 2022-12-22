export const formatDate = (date) => {
    let newDate = [];

    const splitDateAndTime = date.split(" ");
    const splittedDate = splitDateAndTime[0].split("-") || splitDateAndTime.split("-");

    const splittedTime = splitDateAndTime[1];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    newDate.push(months[splittedDate[1]-1]);
    newDate.push(splittedDate[2]);
    newDate.push(splittedDate[0]);
    newDate.push(splittedTime)

    return newDate;
}