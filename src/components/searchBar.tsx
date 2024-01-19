import { FC } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  keyword: string;
  setKeyword: (value: string) => void;
  getLocationCoordinate: (keyword: string) => void;
}

const SearchBar: FC<SearchProps> = (props) => {
  const { keyword, setKeyword, getLocationCoordinate } = props;
  return (
    <SearchBarContainer>
      <SearchBarInput
        title="country"
        placeholder="City Name"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getLocationCoordinate(keyword);
          }
        }}
      />
      <SearchButton
        onClick={() => {
          getLocationCoordinate(keyword);
        }}
      >
        <FaSearch size={20} style={{ color: "#ffffff" }} />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 20px;
  @media (max-width: 1248px) {
    padding: 10px;
    display: flex;
    width: 70%;
  }
  @media (max-width: 1024px) {
    padding: 10px;
    display: flex;
    width: 90%;
  }
  @media (max-width: 480px) {
    padding: 10px;
    display: flex;
    width: 90%;
  }
`;

const SearchBarInput = styled.input`
  padding: 20px;
  opacity: 80%;
  border-radius: 20px;
  background-color: #3d2e6e;
  color: #ffffff;
  width: 80%;
  border: 0px;
  font-size: 20px;
  @media (max-width: 480px) {
    padding: 5 px;
    margin-left: 2px;
    width: 70%;
    display: flex;
  }
`;

const SearchButton = styled.button`
  padding: 25px;
  border-radius: 15px;
  background-color: #28114c;
  margin-left: 20px;
  @media (max-width: 375px) {
    padding: 25px;
    border-radius: 10px;
    margin-left: 30px;
  }
`;
