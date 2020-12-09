import React, { useEffect, useReducer } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import {get} from '../Service/CompareService'



function CompareForm(props: any) {

    const initialState = {};

    const [state, dispatchForm] = useReducer(reducerForm, initialState);

    useEffect(() =>{
        dispatchForm(props);
    },[]);

    const reducerForm = (state: any, action: any) =>{
        switch (action.action){
            case "LoadRecord":
                get("5fc93a5722517c5258195765")
                    .then (response => {console.log(response.data)});
                break;
            default:
            return state
        }
        
    }
    


    return (
        <Form>

            <Form.Group controlId="formGroup">
                <Form.Label>Group</Form.Label>
                <Form.Control type="text" placeholder="Enter group" value = {state.group}/>
            </Form.Group>

            <Form.Group controlId="formLeft">
                <Form.Label>Left URL</Form.Label>
                <Form.Control type="url" placeholder="Left URL" value = {state.left}/>
            </Form.Group>
            <Form.Group controlId="formRight">
                <Form.Label>Right URL</Form.Label>
                <Form.Control type="url" placeholder="Right URL" value = {state.right}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}

export default CompareForm