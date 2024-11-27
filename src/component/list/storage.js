export const saveToSessionStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const loadFromSessionStorage = (key, defaultValue) => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
};
