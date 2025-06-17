import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const value = localStorage.getItem(key)
        if(value) setValue(JSON.parse(value))
    }, [key])

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}