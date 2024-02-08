const storage = {
    // returns the keyValue if it exists else returns null
    getItem: <TKeyValue>(keyName: string) => {
        const localStorageKeyValue = localStorage.getItem(keyName);
        const keyValue = localStorageKeyValue
            ? (JSON.parse(localStorageKeyValue) as TKeyValue)
            : null;
        return keyValue;
    },

    setItem: (keyName: string, keyValue: unknown) => {
        localStorage.setItem(keyName, JSON.stringify(keyValue));
    },

    removeItem: (keyName: string) => {
        localStorage.removeItem(keyName);
    },
};

export default storage;
