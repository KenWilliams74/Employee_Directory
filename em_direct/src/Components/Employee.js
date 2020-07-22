import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import '../App.css';
import Button from 'react-bootstrap/Button';




function Employee() {

    const [items, setItems] = useState([]);


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
        items.sort()
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
                            First Name
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="lg" onClick={handleFirstChange} active block>
                            Last Name
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="lg" onClick={handleFirstChange} active block>
                            Location
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="lg" onClick={handleFirstChange} active block>
                            Gender
                            </Button>{' '}
                        </th>
                        <th><Button variant="secondary" size="lg" onClick={handleFirstChange} active block>
                            Age
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