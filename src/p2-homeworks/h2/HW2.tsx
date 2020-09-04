import React, {useState} from "react";
import Affairs from "./Affairs";
import s from "./Affairs.module.css"

// types
export type AffairPriorityType = "high" | "middle" | "low"; //Приоритетные дела
export type AffairType = { //Дела
    _id: number,
    name: string,
    priority: string
}
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "Anime", priority: "low"},
    {_id: 3, name: "Games", priority: "low"},
    {_id: 4, name: "Work", priority: "high"},
    {_id: 5, name: "HTML & CSS", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === "all") return affairs;

    if (filter === "high") {
        return affairs.filter(t => (t.priority === "high"))
    }
    if (filter === "middle") {
        return affairs.filter(t => (t.priority === "middle"))
    }
    if (filter === "low") {
        return affairs.filter(t => (t.priority === "low"))
    }
    throw new Error("передан не корректный список")
}

export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => affairs.filter((t: AffairType)=> (t._id !== _id))

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // Хук состояния дел

    const [filter, setFilter] = useState<FilterType>("all"); // Хук состояния фильтров


    const filteredAffairs = filterAffairs(affairs, filter);

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    const changeAffairTitle = (_id: number, text: string) => {
        let newTitle = affairs.find(af => af._id === _id)
        if (newTitle)
            newTitle.name = text
        setAffairs([...affairs])
    }

    return (
        <div className={s.body}>
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                changeAffairTitle={changeAffairTitle}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>
    );
}

export default HW2;
