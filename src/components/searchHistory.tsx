import { FC } from "react";
import styled from "styled-components";
import moment from "moment";
import { FaSearch, FaTrash } from "react-icons/fa";
import { History } from "../App";

interface SearchHistoryProps {
  searchHistory: History[];
  deleteHistory: (index: number) => void;
  getLocationCoordinate: (keyword: string) => void;
}

const SearchHistory: FC<SearchHistoryProps> = (props) => {
  const { searchHistory, getLocationCoordinate, deleteHistory } = props;
  return (
    <SearchHistoryContainer>
      <SearchHistoryHeader>Search History</SearchHistoryHeader>
      {searchHistory.map((item, index) => (
        <SearchHistoryEntry key={item.city + index}>
          <SearchHistoryEntryText>
            {item.city}, {item.country}
          </SearchHistoryEntryText>
          <SearchHistoryEntryDate>
            {moment(new Date(item.date)).format("DD-MM-YYYY hh:mm:ss A")}
          </SearchHistoryEntryDate>
          <SearchHistoryButtonContainer>
            <SearchHistoryButton
              onClick={() => {
                getLocationCoordinate(`${item.city},${item.country}`);
              }}
            >
              <FaSearch size={20} style={{ color: "#ffffff" }} />
            </SearchHistoryButton>
            <SearchHistoryButton
              onClick={() => {
                deleteHistory(index);
              }}
            >
              <FaTrash size={20} style={{ color: "#ffffff" }} />
            </SearchHistoryButton>
          </SearchHistoryButtonContainer>
        </SearchHistoryEntry>
      ))}
    </SearchHistoryContainer>
  );
};

export default SearchHistory;

const SearchHistoryContainer = styled.div`
  grid-column: 1 / span2;
  grid-row-start: 4;
  grid-column-start: 1;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin: 20px;
  padding-bottom: 10px;
`;

const SearchHistoryHeader = styled.p`
  color: #ffffff;
  align-self: left;
  text-align: left;
  margin: 0px 20px;
  padding-top: 10px;
  font-size: 24px;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SearchHistoryEntry = styled.div`
  background: rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;
  margin: 10px;
  width: auto;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const SearchHistoryEntryText = styled.div`
  grid-column-start: 1;
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  @media (max-width: 480px) {
    grid-column-start: 1;
    grid-row-start: 1;
    font-size: 13px;
    color: #ffffff;
    padding-left: 10px;
    text-align: left;
  }
`;

const SearchHistoryEntryDate = styled.div`
  grid-column-start: 2;
  font-size: 20px;
  color: #ffffff;
  justify-content: left;
  @media (max-width: 480px) {
    font-size: 13px;
    color: #ffffff;
    text-align: right;
  }
`;

const SearchHistoryButtonContainer = styled.div`
  grid-column-start: 3;
  display: flex;
`;

const SearchHistoryButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 1px solid #949090;
  background-color: rgba(0, 0, 0, 0.3);
  margin-right: 12px;
  @media (max-width: 480px) {
    height: 38px;
    width: 38px;
    margin: 5px;
  }
`;
