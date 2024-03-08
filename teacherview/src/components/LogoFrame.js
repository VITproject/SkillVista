import styled from "styled-components";

const LogoFrameChild = styled.div`
  width: 372px;
  height: 1024px;
  position: relative;
  background-color: var(--color-darkgray);
  display: none;
  max-width: 100%;
`;
const Logo = styled.div`
  height: 75px;
  width: 315px;
  position: relative;
  background-color: var(--color-gainsboro);
  display: none;
`;
const VitVedant = styled.div`
  height: 45px;
  flex: 1;
  position: relative;
  font-size: var(--font-size-4xl);
  font-family: var(--font-inter);
  color: var(--color-black);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const Logo1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-base) var(--padding-5xl) var(--padding-sm)
    var(--padding-xl);
  background-color: var(--color-gainsboro);
  width: 315px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  white-space: nowrap;
  z-index: 2;
  &:hover {
    background-color: var(--color-silver);
  }
`;
const AnjaliMathur = styled.div`
  height: 43px;
  width: 212px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const AnjaliMathurWrapper = styled.div`
  width: 288px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-51xl) var(--padding-xl);
  box-sizing: border-box;
`;
const Button = styled.div`
  height: 54px;
  width: 323px;
  position: relative;
  background-color: var(--color-crimson);
  display: none;
  max-width: 100%;
`;
const Overview = styled.div`
  height: 33px;
  flex: 1;
  position: relative;
  font-size: var(--font-size-4xl);
  font-family: var(--font-inter);
  color: var(--color-black);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const NestedFrames = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-sm) var(--padding-15xl) var(--padding-6xs)
    var(--padding-16xl);
  background-color: var(--color-crimson);
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 2;
  &:hover {
    background-color: var(--color-tomato);
  }
`;
const Button1 = styled.div`
  height: 54px;
  width: 323px;
  position: relative;
  background-color: var(--color-gainsboro);
  display: none;
  max-width: 100%;
`;
const StudentEnrolled = styled.div`
  height: 33px;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const NestedFrames1 = styled.div`
  align-self: stretch;
  background-color: var(--color-gainsboro);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-15xl) var(--padding-5xs)
    var(--padding-16xl);
  box-sizing: border-box;
  white-space: nowrap;
  max-width: 100%;
  z-index: 2;
`;
const ButtonFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 25px 0px;
  max-width: 100%;
`;
const ButtonFrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const LogoFrameRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkgray);
  width: 372px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-17xl) var(--padding-12xl) var(--padding-433xl)
    var(--padding-mid);
  box-sizing: border-box;
  gap: 68px 0px;
  max-width: 100%;
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-4xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;

const LogoFrame = () => {
  return (
    <LogoFrameRoot>
      <LogoFrameChild />
      <Logo1>
        <Logo />
        <VitVedant>vit vedant</VitVedant>
      </Logo1>
      <AnjaliMathurWrapper>
        <AnjaliMathur>Anjali Mathur</AnjaliMathur>
      </AnjaliMathurWrapper>
      <ButtonFrameWrapper>
        <ButtonFrame>
          <NestedFrames>
            <Button />
            <Overview>Overview</Overview>
          </NestedFrames>
          <NestedFrames1>
            <Button1 />
            <StudentEnrolled>Student enrolled</StudentEnrolled>
          </NestedFrames1>
          <NestedFrames1>
            <Button1 />
            <StudentEnrolled>Upload Lecture</StudentEnrolled>
          </NestedFrames1>
        </ButtonFrame>
      </ButtonFrameWrapper>
    </LogoFrameRoot>
  );
};

export default LogoFrame;
