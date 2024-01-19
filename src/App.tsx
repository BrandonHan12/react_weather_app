import { useState, useEffect, useCallback, FC } from "react";
import styled from "styled-components";
import weather from "./class/weather";
import "./App.css";
import { WeatherInfo } from "./api/getWeatherAPI";
import { SearchBar, SearchHistory, WeatherDisplay } from "./components";

export interface History {
  city: string;
  country: string;
  date: Date;
}

const App: FC = () => {
  const [keyword, setKeyword] = useState("");
  const [searchHistory, setSearchHistory] = useState<History[]>([]);
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();
  const [notFound, setNotfound] = useState(false);

  const getLocationCoordinate = useCallback(
    (city: string) => {
      weather
        .getLocationCoordinate(city)
        .then((response) => {
          if (response.data.length > 0) {
            setNotfound(false);
            const locationData = response.data[0];
            getWeather(locationData.lat, locationData.lon);
            setSearchHistory([
              {
                city: locationData.name,
                country: locationData.country,
                date: new Date(),
              },
              ...searchHistory,
            ]);
          } else {
            setNotfound(true);
          }
        })
        .catch(() => {
          setNotfound(true);
        });
    },
    [searchHistory]
  );

  useEffect(() => {
    if (searchHistory.length === 0) {
      getLocationCoordinate("Singapore,SG");
    }
  }, [getLocationCoordinate, searchHistory.length]);

  const getWeather = (lat: number, lon: number) => {
    weather.getWeatherInfo(lat, lon).then((response) => {
      setWeatherInfo(response.data);
    });
  };

  const deleteHistory = (index: number) => {
    let tempArr = [...searchHistory];
    tempArr.splice(index, 1);
    setSearchHistory(tempArr);
  };

  return (
    <AppContainer className="App">
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        getLocationCoordinate={getLocationCoordinate}
      />
      <ErrorMessage $hide={notFound}>
        {<span>Country Not Found</span>}
      </ErrorMessage>
      <BodyContainer>
        <WeatherDisplay weatherInfo={weatherInfo as WeatherInfo} />
        <SearchHistory
          searchHistory={searchHistory}
          getLocationCoordinate={getLocationCoordinate}
          deleteHistory={deleteHistory}
        />
      </BodyContainer>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ErrorMessage = styled.div<{ $hide: boolean }>`
  display: ${({ $hide }) => ($hide ? "block" : "none")};
  height: 30px;
  width: 300px;
  background-color: #e99595;
  border: 1px solid #ff0000;
  font-weight: bold;
  margin-bottom: 15px;
`;

const BodyContainer = styled.div`
  margin: 20px auto;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  opacity: 90%;
  border-radius: 20px;
  @media (max-width: 767px) {
    margin: 0px 20px;
  }
  @media (max-width: 412px) {
    margin: 40px 20px;
  }
`;
