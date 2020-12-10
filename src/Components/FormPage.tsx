import React from 'react'
import CompareForm from './CompareForm';


const HomePage = () => {

    return (
        <React.Fragment>
            <h1> FORM PAGE </h1>
            <CompareForm action="NewRecord" recId=""></CompareForm>
        </React.Fragment>
    );
}
export default HomePage;