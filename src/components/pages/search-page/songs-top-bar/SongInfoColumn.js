import React from "react";
import {
  FieldsWrappers,
  InfoContainer,
  RowText,
  SongName,
  ArtistsWrapper
} from "./SongInfoColumnElements";

const SongInfoColumn = ({tableHeads}) => {
  return (
    <InfoContainer>
      <SongName>
        <RowText>{tableHeads[0]}</RowText>
      </SongName>
      <ArtistsWrapper>
        <RowText>{tableHeads[1]}</RowText>
      </ArtistsWrapper>
      <FieldsWrappers>
        <RowText>{tableHeads[2]}</RowText>
      </FieldsWrappers>
      <FieldsWrappers>
        <RowText>{tableHeads[3]}</RowText>
      </FieldsWrappers>
      <FieldsWrappers>
        <RowText>{tableHeads[4]}</RowText>
      </FieldsWrappers>
      <RowText>Options</RowText>
    </InfoContainer>
  );
};

export default SongInfoColumn;
