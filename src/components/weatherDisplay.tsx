import { FC } from "react";
import styled from "styled-components";
import moment from "moment";
import { WeatherInfo } from "../api/getWeatherAPI";

interface WeatherProps {
  weatherInfo: WeatherInfo;
}
const WeatherDisplay: FC<WeatherProps> = (props) => {
  const { weatherInfo } = props;
  return (
    <>
      <DisplayContainer>
        <CurrentWeatherContainer>
          <WeatherTitle>Today's Weather</WeatherTitle>
          <TemperatureText>
            {weatherInfo ? weatherInfo.main.temp.toFixed(0) : "-"}°C
          </TemperatureText>
          <WeatherText>
            {`H: ${
              weatherInfo ? weatherInfo.main.temp_max.toFixed(0) : "-"
            }°C L: ${
              weatherInfo ? weatherInfo.main.temp_min.toFixed(0) : "-"
            }°C`}
          </WeatherText>
          <WeatherText>
            {weatherInfo ? weatherInfo.name : "-"},
            {weatherInfo ? weatherInfo.sys.country : "-"}
          </WeatherText>
          <WeatherInfoText>
            <p>{moment(new Date()).format("DD-MM-YYYY hh:mm:ss A")} </p>
            <p>
              Humidity :{" "}
              {weatherInfo ? weatherInfo.main.humidity.toFixed(0) : "-"}%
            </p>
            <p>{weatherInfo ? weatherInfo.weather[0].main : "-"}</p>
          </WeatherInfoText>
        </CurrentWeatherContainer>
        <WeatherImg src={require("../assets/sun.png")} alt="sun" />
      </DisplayContainer>
    </>
  );
};

export default WeatherDisplay;

const WeatherImg = styled.img`
  display: flex;
  position: relative;
  width: 34%;
  top: -380px;
  right: -660px;
  @media (max-width: 430px) {
    width: 48%;
    top: -240px;
    right: -200px;
  }
  @media (max-width: 390px) {
    width: 47%;
    top: -240px;
    right: -160px;
  }
`;

const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  float: left;
`;

const DisplayContainer = styled.div`
  height: 200px;
  margin: 20px;
  border-radius: 20px;
  padding-bottom: 50px;
  @media (max-width: 480px) {
    padding: 10px;
    margin: 0px;
  }
  @media (max-width: 375px) {
    padding: 10px;
    margin: 0px;
  }
`;

const WeatherTitle = styled.p`
  color: #ffffff;
  font-size: 20px;
  text-align: left;
  margin: 0px;
  @media (max-width: 430px) {
    font-size: 18px;
  }
  @media (max-width: 390px) {
    font-size: 18px;
  }
`;

const TemperatureText = styled.p`
  color: #ffffff;
  font-size: 80px;
  font-weight: bolder;
  margin: 0px;
  @media (max-width: 480px) {
    color: #ffffff;
    font-size: 38px;
    margin: 0px;
  }
  @media (max-width: 375px) {
    color: #ffffff;
    font-size: 30px;
    margin: 0px;
  }
`;

const WeatherText = styled.p`
  color: #ffffff;
  text-align: left;
  font-size: 20px;
  @media (max-width: 480px) {
    font-size: 18px;
    margin: 0px;
  }
`;

const WeatherInfoText = styled.div`
  display: flex;
  position: relative;
  top: -46px;
  right: -90px;
  width: 100%;
  justify-content: space-around;
  color: #ffffff;
  font-size: 20px;
  p {
    margin: 0px;
  }

  @media (max-width: 430px) {
    flex-direction: column-reverse;
    text-align: right;
    right: 15px;
    font-size: 16px;
  }
  @media (max-width: 390px) {
    flex-direction: column-reverse;
    text-align: right;
    right: 15px;
    font-size: 16px;
  }
`;
