import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="headerContent"></div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  background-color: #fff;
  border-width: 0;
  display: block;
  font-size: 100%;
  left: 0;
  margin: 0;
  padding: 0 30px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  height: 80px;
  .headerContent {
    align-items: center;
    background-color: transparent;
    border-width: 0;
    display: flex;
    font-size: 100%;
    margin: 0 auto;
    min-height: 100%;
    padding: 0;
    vertical-align: baseline;
    width: 1128px;
  }
`;
