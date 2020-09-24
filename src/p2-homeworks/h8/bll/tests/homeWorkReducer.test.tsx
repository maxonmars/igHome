import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";
import {InitialStateType} from "../../HW8";

let initialState: InitialStateType;

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState: InitialStateType = homeWorkReducer(initialState, {type: "sort", payload: "up"});

    expect(newState[0].name).toBe("Александр");
    expect(newState[2].name).toBe("Дмитрий");
    expect(newState[4].name).toBe("Коля");
    expect(newState.length).toBe(6);
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});

    expect(newState[0].name).toBe("Кот");
    expect(newState[2].name).toBe("Ирина");
    expect(newState[4].name).toBe("Виктор");
    expect(newState.length).toBe(6);
});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});

    expect(newState[0].age).toBe(66)
    expect(newState[1].age).toBe(44)
    expect(newState[2].age).toBe(40)
    expect(newState[3].age).toBe(55)
    expect(newState.length).toBe(4);
});
