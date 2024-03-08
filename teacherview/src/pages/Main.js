import LogoFrame from "../components/LogoFrame";
import styled from "styled-components";

const Button = styled.div`
  height: 216px;
  width: 429px;
  position: relative;
  background-color: var(--color-gainsboro);
  display: none;
  max-width: 100%;
`;
const Lecture = styled.div`
  height: 70px;
  width: 253px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 179px;
  left: 937px;
  background-color: var(--color-gainsboro);
  width: 429px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-54xl) var(--padding-xl);
  box-sizing: border-box;
  white-space: nowrap;
  max-width: 100%;
`;
const Button1 = styled.textarea`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 446px;
  left: 431px;
`;
const Button2 = styled.textarea`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 446px;
  left: 937px;
`;
const Button3 = styled.textarea`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 713px;
  left: 431px;
`;
const Button4 = styled.textarea`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 713px;
  left: 937px;
`;
const LoginLogoutButtonChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 100%;
  height: 100%;
  display: none;
`;
const LoginlogoutButton = styled.div`
  position: absolute;
  top: 12px;
  left: 1326px;
  background-color: var(--color-indianred);
  width: 79px;
  height: 49px;
  z-index: 1;
`;
const LoginLogoutButton = styled.header`
  position: sticky;
  top: 0;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 1440px;
  height: 76px;
  z-index: 99;
`;
const FrameGroup1 = styled.textarea`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 179px;
  left: 431px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-46xl) 88px;
  box-sizing: border-box;
  font-family: var(--font-inter);
  font-size: var(--font-size-4xl);
  color: var(--color-black);
`;
const Subject = styled.div`
  position: absolute;
  top: 92px;
  left: 385px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 253px;
  height: 70px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Date1 = styled.div`
  position: absolute;
  top: 92px;
  left: 899px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 253px;
  height: 70px;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const FrameGroupItem = styled.img`
  position: absolute;
  top: 5px;
  left: 25px;
  width: 34px;
  height: 34px;
  object-fit: contain;
  z-index: 2;
`;
const FrameGroup2 = styled.div`
  position: absolute;
  top: 105px;
  left: 1100px;
  background-color: var(--color-gainsboro);
  width: 59px;
  height: 45px;
  z-index: 1;
`;
const FrameGroupInner = styled.div`
  height: 45px;
  width: 108px;
  position: relative;
  background-color: var(--color-gainsboro);
  display: none;
`;
const PolygonIcon = styled.img`
  height: 34px;
  width: 34px;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const FrameGroup3 = styled.div`
  position: absolute;
  top: 105px;
  left: 1258px;
  background-color: var(--color-gainsboro);
  width: 108px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-8xs) 0px var(--padding-7xs);
  box-sizing: border-box;
`;
const FrameGroupChild = styled.img`
  position: absolute;
  top: 5px;
  left: 25px;
  width: 34px;
  height: 34px;
  object-fit: contain;
  z-index: 1;
`;
const FrameGroup4 = styled.div`
  position: absolute;
  top: 105px;
  left: 1179px;
  background-color: var(--color-gainsboro);
  width: 59px;
  height: 45px;
`;
const FrameGroupChild1 = styled.div`
  height: 45px;
  width: 276px;
  position: relative;
  background-color: var(--color-gainsboro);
  display: none;
`;
const FrameGroupChild2 = styled.img`
  height: 34px;
  width: 34px;
  position: relative;
  object-fit: contain;
  z-index: 2;
`;
const FrameGroup5 = styled.div`
  position: absolute;
  top: 105px;
  left: 584px;
  background-color: var(--color-gainsboro);
  width: 276px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-8xs) var(--padding-sm) var(--padding-7xs);
  box-sizing: border-box;
  z-index: 1;
`;
const LogoFrameParent = styled.main`
  align-self: stretch;
  height: 1024px;
  position: relative;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-4xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const FrameChild = styled.img`
  height: 708px;
  width: 12.1px;
  position: relative;
  object-fit: contain;
`;
const MainInner = styled.div`
  width: 1347.9px;
  height: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const MainRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  letter-spacing: normal;
`;

const Main = () => {
  return (
    <MainRoot>
      <LogoFrameParent>
        <LogoFrame />
        <FrameGroup>
          <Button />
          <Lecture>Lecture 2</Lecture>
        </FrameGroup>
        <Button1 rows={11} cols={21} />
        <Button2 rows={11} cols={21} />
        <Button3 rows={11} cols={21} />
        <Button4 rows={11} cols={21} />
        <LoginLogoutButton>
          <LoginLogoutButtonChild />
          <LoginlogoutButton />
        </LoginLogoutButton>
        <FrameGroup1 placeholder="Lecture 1" rows={11} cols={21} />
        <Subject>Subject</Subject>
        <Date1>Date</Date1>
        <FrameGroup2>
          <LoginLogoutButtonChild />
          <FrameGroupItem loading="lazy" alt="" src="/polygon-4.svg" />
        </FrameGroup2>
        <FrameGroup3>
          <FrameGroupInner />
          <PolygonIcon loading="lazy" alt="" src="/polygon-4.svg" />
        </FrameGroup3>
        <FrameGroup4>
          <LoginLogoutButtonChild />
          <FrameGroupChild loading="lazy" alt="" src="/polygon-4.svg" />
        </FrameGroup4>
        <FrameGroup5>
          <FrameGroupChild1 />
          <FrameGroupChild2 loading="lazy" alt="" src="/polygon-4.svg" />
        </FrameGroup5>
      </LogoFrameParent>
      <MainInner>
        <FrameChild alt="" src="/arrow-1.svg" />
      </MainInner>
    </MainRoot>
  );
};

export default Main;
