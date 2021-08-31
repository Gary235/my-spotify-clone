import styled from "styled-components";

import { COLORS } from "helpers/constants/colors";
import { ReactComponent as Discovery } from "../../../assets/icons/Discovery.svg";

export const GlobalContainer = styled.div`
  background: ${COLORS.athensGray};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const GroupContainer = styled.div`
  margin: 3em 0;
`;

export const GroupTitle = styled.div`
  font-family: "CircularBold";
  font-size: 1em;
  padding: 0 2em;
  color: ${COLORS.riverBed};
`;

export const GroupBody = styled.a`
  margin: 2em 0;
  padding: 0 2em;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  transition: color 0.2s;

  border-right: ${({ isActive }: { isActive: boolean }) =>
    isActive && "2px solid currentColor"};
  color: ${({ isActive }: { isActive: boolean }) =>
    isActive ? COLORS.dodgerBlue : COLORS.riverBed};

  :hover {
    color: ${COLORS.resolutionBlue};
  }
`;

export const BodyItem = styled.div`
  font-size: 0.75;
  margin: 0 1em;
`;

export const DiscoveryIcon = styled(Discovery)`
  max-width: 1em;

  .svg-path {
    fill: currentColor;
  }
`;
