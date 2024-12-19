function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () =>
        characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('');
}

function getRandomNumber(length) {
    const numbers = '0123456789';
    return Array.from({ length }, () =>
        numbers.charAt(Math.floor(Math.random() * numbers.length))
    ).join('');
}

function getRandomAddress() {
    return `${getRandomNumber(3)} ${getRandomString(10)} Street`;
}

function getRandomCity() {
    return getRandomString(8);
}

function getRandomState() {
    return getRandomString(5);
}

function getRandomZipCode() {
    return getRandomNumber(5);
}

function getRandomPhoneNumber() {
    return `${getRandomNumber(3)}-${getRandomNumber(3)}-${getRandomNumber(4)}`;
}

module.exports = {
    getRandomString,
    getRandomNumber,
    getRandomAddress,
    getRandomCity,
    getRandomState,
    getRandomZipCode,
    getRandomPhoneNumber,
};
