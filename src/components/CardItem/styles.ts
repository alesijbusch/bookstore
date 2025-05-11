import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Link } from "react-router";
import { Typography } from "../../ui/typography";
import { Media } from "../../ui/media";

const StyledCardItem = styled(Link)`
  width: 352px;
  text-decoration: none;
  &:hover {
    h2 {
      color: ${Color.primaryLight};
    }
  }
  ${Media.LG} {
    width: 328px;
  }
  ${Media.SM} {
    width: 272px;
  }
  ${Media.XS} {
    width: 100%;
  }
`;

const CardImagesInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 264px;
  background-color: ${Color.blue};
  margin-bottom: 20px;
  ${Media.LG} {
    height: 246px;
  }
  ${Media.SM} {
    height: 204px;
  }
`;
const CardImage = styled.img`
  display: block;
  width: 226px;
  height: 264px;
  ${Media.LG} {
    width: 210px;
    height: 245px;
  }

  ${Media.SM} {
    width: 174px;
    height: 203px;
  }
`;
const Title = styled.h2`
  ${Typography.H3}
  text-transform: uppercase;
  line-height: 32px;
  color: ${Color.primary};
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 64px;
  transition: 0.3s ease-in-out;
`;

const SubTitle = styled.div`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.secondary};
  margin-top: 8px;
  margin-bottom: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 24px;
`;
const Price = styled.div`
  ${Typography.H3}
  color: ${Color.primary};
  line-height: 32px;
`;

export { StyledCardItem, CardImagesInner, CardImage, Title, SubTitle, Price };
