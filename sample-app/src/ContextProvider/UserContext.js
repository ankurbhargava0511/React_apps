import { useState,createContext } from 'react';


export const MyUserContext = createContext({
    curUser:null,
    setCurUser:()=>null,
});

export const UserProvider =({children})=>{
    const [curUser, setCurUser] = useState('test')
    const value={curUser, setCurUser}
    console.log(curUser)
    return<MyUserContext.Provider value={value} >{children}</MyUserContext.Provider>
};