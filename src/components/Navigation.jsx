import styled from "styled-components";

const Navigation = () => {
  return (
    <div>
      <NavigationStyled> 코멘토 쇼핑</NavigationStyled>
    </div>
  );
};

const NavigationStyled = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  padding: 20px 151px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #eeeeee; ;
`;

export default Navigation;
