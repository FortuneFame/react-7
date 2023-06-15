import React, { useEffect, useReducer } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import { Users } from '../../data';
import defaultImg from './defaultImg/default.jpg';

const initialState = Users.map((user) => ({
  ...user,
  age: 0,
  like: 0,
}));

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementAge':
      return state.map((user, index) =>
        index === action.payload ? { ...user, age: user.age + 1 } : user
      );
    case 'decrementAge':
      return state.map((user, index) =>
        index === action.payload && user.age > 0 ? { ...user, age: user.age - 1 } : user
      );
    case 'toggleLike':
      return state.map((user, index) =>
        index === action.payload ? { ...user, like: user.like === 0 ? 1 : 0 } : user
      );
    case 'restoreState':
      return action.payload;
    default:
      throw new Error();
  }
};

const HistoryPerson = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultImg;
  };

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('historyPersonState'));
    if (savedState) {
      dispatch({ type: 'restoreState', payload: savedState });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('historyPersonState', JSON.stringify(state));
  }, [state]);

  const buttonStyle = {
    margin: '10px',
  };

  return (
    <Container className="shadow p-3 mb-5 mt-5 bg-white rounded">
      <h1 className='text-center'>History Person</h1>
      <Row className="justify-content-md-center">
        {state.map((user, index) => (
          <Col className="shadow p-3 m-3 bg-white rounded" md="auto" key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={
                  user.avatar.includes('google.com') || user.avatar.includes('shutterstock.com')
                    ? defaultImg
                    : user.avatar
                }
                onError={handleImageError}
                alt={user.alt}
                width="250"
                height="250"
              />
              <Card.Body className="text-center">
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  Phone: {user.phoneNumber}
                  <br />
                  City: {user.city}
                  <br />
                  Country: {user.country}
                  <br />
                  Age: {user.age}
                  <br />
                  Likes: {user.like}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch({ type: 'incrementAge', payload: index })}
                  style={buttonStyle} // Добавлен пользовательский стиль для отступов
                >
                  Add year
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => dispatch({ type: 'decrementAge', payload: index })}
                  style={buttonStyle} // Добавлен пользовательский стиль для отступов
                >
                  Subtract year
                </Button>
                <Button
                  variant="success"
                  onClick={() => dispatch({ type: 'toggleLike', payload: index })}
                >
                  Toggle like
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HistoryPerson;
