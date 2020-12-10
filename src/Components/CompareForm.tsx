/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { get, update } from '../Service/CompareService'



function CompareForm(props: any) {
    const emptyForm = { _id: "", group: "", left: "", right: "" }
    const [dataRow, setDataRow] = useState(emptyForm);
    const [buttonTitle, setButtonTitle] = useState("");
    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = () => {
        console.log(props.action);
        if (props.action === "LoadRecord") {
            get(props.recId)
                .then(response => {
                    console.log(response.data);
                    setDataRow(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
            setButtonTitle("Update");
        }
    };

    const updateData = () => {
        update(dataRow).then(response =>{console.log(response);});
    }
    const handleControlChange = (e: any) => {
        const { id, value } = e.target
        console.log(`Value: ${value}`)
        setDataRow(datarow => ({
            ...datarow,
            [id]: value
        }));
        console.log(dataRow);
    };

    return (
        <Form>
            <Form.Group controlId="group">
                <Form.Label>Group</Form.Label>
                <Form.Control type="text" placeholder="Enter group" value={dataRow.group} onChange={handleControlChange} />
            </Form.Group>

            <Form.Group controlId="left">
                <Form.Label>Left URL</Form.Label>
                <Form.Control type="text" placeholder="Left URL" defaultValue={dataRow.left} onChange={handleControlChange}/>
            </Form.Group>
            <Form.Group controlId="right">
                <Form.Label>Right URL</Form.Label>
                <Form.Control type="text" placeholder="Right URL" defaultValue={dataRow.right} onChange={handleControlChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={updateData}>
                {buttonTitle}
            </Button>
        </Form>
    )

}

export default CompareForm