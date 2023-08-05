import styled from "styled-components";
import { ResultType } from "../../data/sample-data";
import { ResultCoords, ResultIcon, ResultTitle } from "../Result";

const ResultContainer = styled.li`
  column-gap: 16px;
  cursor: pointer;
  display: grid;
  grid-template-areas:
    "icon title"
    "icon coord";
  grid-template-columns: 32px auto;
  row-gap: 8px;

  &:hover {
    background-color: ghostwhite;
  }
  &:active {
    background-color: #eeeefa;
  }
`;
type ResultProps = {
  onClick: (result: ResultType) => void;
  result: ResultType;
};

export default function Result({ onClick, result }: ResultProps) {
  return (
    <ResultContainer onClick={() => onClick(result)}>
      <ResultIcon />
      <ResultTitle result={result} />
      <ResultCoords result={result} />
    </ResultContainer>
  );
}
