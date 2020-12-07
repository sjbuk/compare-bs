import React from 'react'
import {useState} from 'react'
import CompareTable from './CompareTable'
import GroupDropdown from './GroupDropdown';


const HomePage = () => {
    const [filterGroup, setFilterGroup] = useState("__All");

    const selectedGroupChange = (group: string) =>{
        setFilterGroup (group);
    }
    return (
        <React.Fragment>
            <h1> HOME PAGE </h1>
            <GroupDropdown groupChangeEvent={selectedGroupChange}>
            </GroupDropdown> 
            <CompareTable selectedGroup={filterGroup}/>

        </React.Fragment>
    );
}
export default HomePage;