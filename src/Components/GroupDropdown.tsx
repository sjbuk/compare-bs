import React from 'react';
//import { MDBDataTableV5 } from 'mdbreact';
import { useState, useEffect } from 'react';
import {DropdownButton, Dropdown }  from 'react-bootstrap';
import { getGroups } from '../Service/CompareService'



function GroupDropdown(props: any) {
    const [dataRows, setDataRows] = useState([]);
    const [selectedValue, setSelectedValue] = useState("__All");
    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = () => {
        getGroups()
            .then(response => {
                setDataRows(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const handleSelect = (e: any) =>{
        setSelectedValue(e);
        props.groupChangeEvent(e);
    }

    return (
        <React.Fragment>
            <DropdownButton defaultValue="__All" title={selectedValue === "__All"? "Select Group" :selectedValue  } onSelect={handleSelect} >
                <Dropdown.Item eventKey="__All" key="__All">ALL</Dropdown.Item>
                {dataRows.map((dataRow: string, index) => (
                    <Dropdown.Item eventKey={dataRow} key={dataRow}>{dataRow}</Dropdown.Item>
                ))}

            </DropdownButton>
        </React.Fragment>
    );
}


export default GroupDropdown;