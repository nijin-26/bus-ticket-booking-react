const storage = {
    // returns the keyValue if it exists else returns null
    getItem: <TTokenValue>(keyName: string) => {
        const tokenVal = localStorage.getItem(keyName)
            ? (JSON.parse(
                  localStorage.getItem(keyName) as string
              ) as TTokenValue)
            : null;

        return tokenVal;
    },

    setItem: (keyName: string, keyValue: unknown) => {
        window.localStorage.setItem(keyName, JSON.stringify(keyValue));
    },

    removeItem: (keyName: string) => {
        localStorage.removeItem(keyName);
    },
};

export default storage;
