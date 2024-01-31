const storage = {
    //returns the token if it exists else returns null
    getToken: (tokenName: string) => {
        return JSON.parse(window.localStorage.getItem(tokenName) as string);
    },

    setToken: <TTokenValue>(tokenName: string, tokenValue: TTokenValue) => {
        window.localStorage.setItem(tokenName, JSON.stringify(tokenValue));
    },

    clearToken: (tokenName: string) => {
        window.localStorage.removeItem(tokenName);
    },
};

export default storage;
