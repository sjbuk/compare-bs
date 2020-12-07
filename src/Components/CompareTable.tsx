import React from 'react';
//import { MDBDataTableV5 } from 'mdbreact';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { getAll, getByGroup } from '../Service/CompareService'



function CompareTable(props: any) {
    const [dataRows, setDataRows] = useState([]);
    useEffect(() => {
        retrieveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.selectedGroup]);

    const retrieveData = () => {
        console.log(props);
        if (props.selectedGroup === "__All") {
            getAll()
                .then(response => {
                    setDataRows(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            getByGroup(props.selectedGroup)
                .then(response => {
                    setDataRows(response.data);
                })
                .catch(e => {
                    console.log(e);
                });

        }
    };


    return (
        <div className="col-md-12">
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Left</th>
                        <th>Right</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataRows.map((dataRow: any, index) => (
                        <tr>
                            <td >{dataRow.group}</td>
                            <td>{dataRow.left}</td>
                            <td>{dataRow.right}</td>
                            <td><Button>Run</Button>
                                <Button>Delete</Button></td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CompareTable;