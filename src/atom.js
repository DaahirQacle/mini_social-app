import { atom } from "recoil";
export const userState = atom({
key:'nameControl',
default:{
    name:'',
    pass:'',
}
})

export const correctState = atom({
    key:'correctControl',
    default:false
    })
export const gendertState = atom({
    key:'genderControl',
    default:false
    })
    