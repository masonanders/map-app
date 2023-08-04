import styled from "styled-components";
import sampleData, { ResultType } from "./sample-data";
import Result from "./Result";
import { useMemo } from "react";
import NoResult from "./NoResult";

const ResultsContainer = styled.div`
  background-color: white;
  border-color: darkgray;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 0.875rem;
  margin-top: 24px;
  overflow: hidden;
  width: 400px;
`;

const ResultsHeader = styled.div`
  background-color: #5281f7;
  border-bottom-color: darkgray;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: white;
  letter-spacing: 0.05rem;
  padding: 12px 16px;
`;

const ResultsBody = styled.ul`
  background-color: white;
  max-height: ${68 * 8}px;
  overflow-y: auto;
  padding: 8px 0;
  
  & > li {
    box-sizing: border-box;
    height: 68px;
    padding: 16px;
  }
`;

type ResultsProps = {
  onSelectResult: (result: ResultType) => void
  searchValue: string;
};

export default function Results({ onSelectResult, searchValue }: ResultsProps) {
  const results: ResultType[] = useMemo(
    () =>
      sampleData.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ),
    [searchValue]
  );

  if (!searchValue) return null;
  return (
    <ResultsContainer>
      <ResultsHeader>{`Found ${results.length} Result${
        results.length === 1 ? "" : "s"
      }:`}</ResultsHeader>
      <ResultsBody>
        {results.length ? (
          results.map((result) => <Result key={result.id} result={result} onClick={onSelectResult} />)
        ) : (
          <NoResult />
        )}
      </ResultsBody>
    </ResultsContainer>
  );
}