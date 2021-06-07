import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
`;

export const LogoImg = styled.div`
  width: 35px;
  height: 35px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.h2`
  font-size: 18px;
  margin: 0;
  margin-left: 6px;
  color: #fff;
  font-weight: 500;

  &:hover {
    color: #15cdfc;
  }
`;