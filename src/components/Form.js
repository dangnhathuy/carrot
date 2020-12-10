import React from 'react';
import { VscTriangleRight }from 'react-icons/vsc';
import { FaCarrot }from 'react-icons/fa';
import styled from 'styled-components';

const popularCities = [ 'Toronto', 'Vancouver', 'Montreal' ];

const Home = ({onCitySelect, onInputChange, route, errorMessage}) => {
  return (
      <FormWrap>
        <Form>
            <Header>
              Carrot 
              <FaCarrot />
            </Header>
            <Description> a Canadian weather app </Description>
            <FormInput id={route}>
              <CityInput type='text' placeholder='Enter City Name' onChange={onInputChange} />
              <CitySubmit onClick={onCitySelect}><VscTriangleRight size={25}/></CitySubmit>
            </FormInput> 
            <ErrorMessage id={route}> error: {errorMessage} </ErrorMessage>
            <br/>
            <p>Popular Cities</p> 
            <PopularCities>
              {
                popularCities.map((city, index) => (
                <Link key={index} value={city} onClick={onCitySelect}>{city}</Link>
                ))
              }
            </PopularCities>
        </Form>
      </FormWrap>
  );
}

const Header = styled.h1`
*{
  margin-left: 5px;
}
  *:hover{
    color: orange;
  }
`

const FormWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const Form = styled.div`
  position: absolute;
  top: 20%;
  width: 30%;
  text-align: center;
  animation: fadeIn ease 3s;
  @media (min-width: 1281px) {
    width: 500px;
  }
  @media (max-width: 900px) {
    width: 80%;
  }

  @media (max-width: 300px) {
    width: 95%;
  }
  @media (max-height: 450px) {
    width: 70%;
    top: 6%;
  }
  @media (max-height: 350px) {
    *{
      margin: 0
    }
  }

`
const Description = styled.div`
  margin: 0 0 30px;
`

const FormInput = styled.div`
  display: flex;
  flex-direction: row;
  &[id='error'] {
    border: 1px solid red;
    border-radius: 15px;
}
`
const CityInput = styled.input`
    width: 100%;
    padding: 0 25px;
    line-height: 25px;
    background-color: rgb(0, 0, 0, 0.35);
    opacity: 1;
    border: none;
    border-radius: 15px 0 0 15px;
    outline: none;
    font-family: redHat_regular;
    color: #fff;
    &::placeholder {
      padding: 1rem 0;
      color: #fff;
    }
`

const CitySubmit =styled.button`
  width: 50px;
  padding: 18px 0;
  border-radius: 0 15px 15px 0;
  align-self: flex-end;
  background-color: rgb(0, 0, 0, 0.35);
  opacity: 1;
  border: none;
  outline: none;
  font-family: redHat_regular;
  color: #fff;
  * {
    opacity: 0.7;
    transition: all 0.5s;
  }
  *:hover {
    opacity: 1;
  }
`

const ErrorMessage = styled.h3`
  &[id='home'] {
    display: none;
  }
  font-size: 14px;
  color: red;
`

const PopularCities = styled.div`
  width: 100%;
  margin-top: 5px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  * {
    padding: 8px;
    border-radius: 5px;
    transition: all 0.5s;
  }
  *:hover {
    transform: scale(1.1);
  }
  @media (max-width: 665px) {
    padding: 0;
}
`
const Link = styled.button`
  background-color: rgb(0, 0, 0, 0.35);
  opacity: 1;
  border: none;
  outline: none;
  font-family: redHat_regular;
  color: #fff;
`

export default Home;
