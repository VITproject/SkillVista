import styled from "styled-components";

const FRAMEVEDANTTEXTChild = styled.div`
  width: 372px;
  height: 1024px;
  position: relative;
  background-color: var(--color-darkgray);
  display: none;
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
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const FrameKapilText = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-4xs);
`;
const Kapil = styled.div`
  height: 43px;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
const NameTexts = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xl) 0px var(--padding-xl);
`;
const Mca = styled.div`
  align-self: stretch;
  height: 33px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 2;
`;
const SubjectsFrame = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px 0px;
`;
const FrameNoOfSubjectsLectures = styled.div`
  width: 296px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) var(--padding-2xl) var(--padding-3xl);
  box-sizing: border-box;
`;
const Button = styled.div`
  height: 54px;
  width: 323px;
  position: relative;
  background-color: var(--color-crimson);
  display: none;
`;
const MySubjects = styled.div`
  height: 33px;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const TriStateButton = styled.div`
  align-self: stretch;
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: var(--padding-sm) var(--padding-15xl) var(--padding-6xs)
    var(--padding-16xl);
  z-index: 2;
`;
const Button1 = styled.div`
  height: 54px;
  width: 323px;
  position: relative;
  background-color: var(--color-gainsboro);
  display: none;
`;
const SubjectsAndLecturesFrame = styled.div`
  align-self: stretch;
  background-color: var(--color-gainsboro);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-smi) var(--padding-15xl) var(--padding-5xs)
    var(--padding-16xl);
  z-index: 2;
`;
const ParentFrameSubjects = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 25px 0px;
`;
const FRAMEVEDANTTEXTRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkgray);
  width: 372px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-17xl) var(--padding-12xl) var(--padding-433xl)
    var(--padding-mid);
  box-sizing: border-box;
  gap: 68px 0px;
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-4xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;

const ContentFrames = () => {
  return (
    <FRAMEVEDANTTEXTRoot>
      <FRAMEVEDANTTEXTChild />
      <FrameKapilText>
        <Logo1>
          <Logo />
          <VitVedant>vit vedant</VitVedant>
        </Logo1>
      </FrameKapilText>
      <FrameNoOfSubjectsLectures>
        <SubjectsFrame>
          <NameTexts>
            <Kapil>Kapil</Kapil>
          </NameTexts>
          <Mca>MCA</Mca>
        </SubjectsFrame>
      </FrameNoOfSubjectsLectures>
      <ParentFrameSubjects>
        <TriStateButton>
          <Button />
          <MySubjects>My subjects</MySubjects>
        </TriStateButton>
        <SubjectsAndLecturesFrame>
          <Button1 />
          <MySubjects>No of Subjects</MySubjects>
        </SubjectsAndLecturesFrame>
        <SubjectsAndLecturesFrame>
          <Button1 />
          <MySubjects>No of Lectures</MySubjects>
        </SubjectsAndLecturesFrame>
      </ParentFrameSubjects>
    </FRAMEVEDANTTEXTRoot>
  );
};

export default ContentFrames;
