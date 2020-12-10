import React, {useState} from 'react';
import styled from 'styled-components';
import { BsFillCaretLeftFill } from 'react-icons/bs'

const WeatherPage = ({weather, onRouteChange}) => {
    const [ unit, setUnit ] = useState('celcius');
    const [ main, setMain ] = useState((weather.temperature - 273.15).toFixed());
    const [ max, setMax ] = useState((weather.max- 273.15).toFixed());
    const [ min, setMin ] = useState((weather.min - 273.15).toFixed());


    const onUnitChange = (event) => {

        if (unit === 'celcius') {
            if (event.target.value === 'fahrenheit') {
                setMain((( main * 9/5) + 32).toFixed() );
                setMax((( max * 9/5) + 32).toFixed() ) ;
                setMin((( min * 9/5) + 32).toFixed() )  
            }

        } else if (unit === 'fahrenheit') {
            if (event.target.value === 'celcius') {
                setMain(((5/9) * (main-32)).toFixed() ) 
                setMax(((5/9) * (max-32)).toFixed() ) 
                setMin(((5/9) * (min-32)).toFixed() ) 
            }
        }
        setUnit(event.target.value);
    }

    return ( 
        <Container>
            <WeatherCard>
            <ReturnArrow  size={25} onClick={onRouteChange}/>
                <Header>
                    <City>{weather.city}</City>
                </Header>
                <Weather>{weather.weather}</Weather>
                <Temperature>
                <MainTemp>{main}</MainTemp>
                    <UnitsContainer>
                        <Celcius value='celcius' onClick={onUnitChange}> &#176;C </Celcius>
                        <Fahrenheit value='fahrenheit'onClick={onUnitChange}> &#176;F </Fahrenheit>
                    </UnitsContainer>
                </Temperature>
                         <p>MAX: {max}&#176;</p>                    
                        <p>MIN: {min}&#176;</p>
            </WeatherCard>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;

`
const WeatherCard = styled.div`
    width: 25%;
    text-align: center;
    color: #fff;
    background-color: rgb(0, 0, 0);
    opacity: 0.5;
    border-radius: 15px;
    padding-bottom: 20px;
    animation: fadeIn2 ease 3s;
    margin-top: 200px;
    @media (max-width: 1200px) {
        width: 460px;
    }
    
    @media (max-width: 510px) {
        width: 90%;
    }

    @media (max-height: 760px) {
        margin-top: 20vh;
    }
`

const Header =styled.div`
    display: flex;
    justify-content: center;
    flex:direction: row;
`

const ReturnArrow = styled(BsFillCaretLeftFill)`
    transition: color 0.5s;    
    position: absolute;
    top: 238px;
    right: 55%;
    @media (max-width: 1200px) {
        right: 65%;
    }
    @media (max-width: 510px) {
        right: 80%;
    }
    
    @media (max-height: 760px) {
        margin-top: 38px;
        top: 20vh;
    }
    &:hover {
        color: #85caff;
      }
`

const City = styled.p`
    font-size: 30px;
`

const Weather = styled.p`
    font-size: 25px;
    margin: 5px;
`

const MainTemp = styled.div`
    margin: 20px 0 0 0
`

const Temperature = styled.div`
    display: flex;
    justify-content: center;
    font-size: 5rem;
    flex-direction: row;
`

const UnitsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 5px;
    padding-top: 20px
`

const Celcius = styled.button`
    outline: none;
    background: none;
    border: none;
    font-family: redHat_regular;
    font-size: 28px;
    line-height: 5px;
    margin: 0;
    color: #fff;
    height: 30px;
    padding-right: 10px;
    border-right: 2px solid #fff;
    transition: all 0.5s;
    &:hover {
        color: #85caff;
      }
`

const Fahrenheit = styled.button`
    outline: none;
    background: none;
    border: none;
    font-family: redHat_regular;
    line-height: 5px;
    font-size: 28px;
    color: #fff;
    height: 30px;
    padding-right: 10px;
    transition: all 0.5s;
    &:hover {
        color: #85caff;
      }
    
`

export default WeatherPage;
