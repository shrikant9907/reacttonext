import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {
        const localStorageValue = localStorage.getItem(key);
        return localStorageValue ? JSON.parse(localStorageValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue]

}

export default useLocalStorage;