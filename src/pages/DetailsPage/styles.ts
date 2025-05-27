import styled from "styled-components";
import { Typography } from "../../ui/typography";
import { Link } from "react-router";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const Details = styled.div``;
const DetailsBack = styled.div`
  display: block;
  margin-bottom: 32px;
  cursor: pointer;
`;
const DetailsTitle = styled.h1`
  ${Typography.H1}
`;
const DetailsMain = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  gap: 100px;
`;
const DetailsImagesInner = styled.div`
  width: 544px;
  height: 472px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Color.orange};
`;
const DetailsImages = styled.img`
  display: block;
  width: 300px;
  height: 350px;
`;
const DetailsFavorites = styled.div``;
const DetailsInfo = styled.div`
  width: 448px;
  padding-top: 40px;
`;
const DetailsInfoTop = styled.div``;
const DetailsPrice = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  ${Media.XS} {
    font-size: 28px;
  }
`;
const DetailsAdditional = styled.ul`
  margin-top: 24px;
  margin-bottom: 72px;
`;
const DetailsAdditionalItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  padding: 0 5px;
`;
const DetailsAdditionalRight = styled.span`
  color: ${Color.primary};
`;
const DetailsAdditionalLeft = styled.span`
  color: ${Color.secondary};
`;
const Button = styled.button`
  width: 100%;
  border: 0px;
  padding: 10px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 24px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
  background-color: ${Color.primary};
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${Color.primaryLight};
  }
`;

const DetailsTabsSections = styled.div``;
const DetailsTabs = styled.div`
  margin: 72px 0;
`;
const DetailsTab = styled.div`
  display: flex;
  border-bottom: 1px solid ${Color.gray};
`;

// const BaseTabTitle = styled.div`
//   padding: 0 40px 24px;
//   font-family: "Manrope", sans-serif;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   cursor: pointer;
// `;
// const DetailsTabTitle = styled(BaseTabTitle)`
//   color: ${Color.secondary};
// `;
// const ActiveTabTitle = styled(BaseTabTitle)`
//   color: ${Color.primary};
//   border-bottom: 2px solid ${Color.primary};
// `;

const DetailsTabTitle = styled.div`
  padding: 0 40px 24px;
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  color: ${Color.secondary};
  &.active {
    color: ${Color.primary};
    border-bottom: 2px solid ${Color.primary};
  }
`;

const DetailsTabContent = styled.div``;
const DetailsTabText = styled.p`
  margin: 50px 0;
  ${Typography.B1}
  color: ${Color.primary};
`;

export {
  Details,
  DetailsBack,
  DetailsTitle,
  DetailsMain,
  DetailsImagesInner,
  DetailsImages,
  DetailsFavorites,
  DetailsInfo,
  DetailsInfoTop,
  DetailsPrice,
  DetailsAdditional,
  DetailsAdditionalItem,
  DetailsAdditionalLeft,
  DetailsAdditionalRight,
  Button,
  DetailsTabsSections,
  DetailsTabs,
  DetailsTab,
  DetailsTabTitle,
  DetailsTabContent,
  DetailsTabText,
};
