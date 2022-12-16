export const formatDate = (date) => {
    let newDate = [];

    const splitted = date.split(" ");

    const splittedDate = splitted[0].split("-");

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    newDate.push(splittedDate[2]);
    newDate.push(months[splittedDate[1]-1]);
    newDate.push(splittedDate[0]);

    return newDate;
}