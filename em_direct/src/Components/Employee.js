import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import Button from 'react-bootstrap/Button';




function Employee() {

    const [items, setItems] = useState([]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();


    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.results);
                   
                },
            )
    }, []);

    const handleFirstChange = () => {
        setFirstName(items.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1))
    };

    const handleLastChange = () => {
        setLastName(items.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1))
    };
    const handleAgeChange = () => {
        setAge(items.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1))
    };

    const handleMaleChange = () => {
        const male = items.filter(gen => gen.gender === "male");
        setItems(male)
    };
    const handleFemaleChange = () => {
        const female = items.filter(gen => gen.gender === "female");
        setItems(female)
    };




    return (
        <div className="container">

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th><Button variant="secondary" size="lg" onClick={handleFirstChange} active block>
                            ID
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="lg" onClick={handleFirstChange} active block>
                            Sort by First Name
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="lg" onClick={handleLastChange} active block>
                            Sort by Last Name
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="lg" onClick={handleFirstChange} active block>
                            Location
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="sm" onClick={handleMaleChange} active block>
                            Filter by Male
                            </Button>{' '}
                            <Button variant="secondary" size="sm" onClick={handleFemaleChange} active block>
                            Filter by Female
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="lg" onClick={handleAgeChange} active block>
                            Sort by Age
                            </Button>{' '
                        }</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.length}>
                            <td><img src={item.picture.thumbnail} alt="Images of Employees"></img></td>
                            <td>{item.name.first}</td>
                            <td>{item.name.last}</td>
                            <td>{item.location.city}, {item.location.state} </td>
                            <td>{item.gender}</td>
                            <td>{item.dob.age}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

};

export default Employee;