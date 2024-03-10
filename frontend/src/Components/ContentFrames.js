import { Button } from "@mui/material";
import styled from "styled-components";
// import logo from ' '; // Adjust the path accordingly

const ContentFramesChild = styled.div`
  width: 372px;
  height: 1024px;
  position: relative;
  background-color: var(--color-darkgray);
  display: none;
`;
const RectangularFrames = styled(Button)`
  height: 75px;
  flex: 1;
  z-index: 2;
`;
const TextFrame = styled.div`
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
const SubtitleFrames = styled.div`
  width: 296px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) var(--padding-3xl) var(--padding-3xl);
  box-sizing: border-box;
`;
const SubjectsAndLecturesFrame = styled(Button)`
  align-self: stretch;
  height: 54px;
  z-index: 2;
`;
const SubjectsAndLecturesFrameChild = styled.div`
  height: 54px;
  width: 323px;
  position: relative;
  background-color: var(--color-gainsboro);
  display: none;
`;
const NoOfSubjects = styled.div`
  height: 33px;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const SubjectsAndLecturesFrame1 = styled(Button)`
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
const NoOfSubjectsFrame = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: 24px 0px;
`;
const ContentFramesRoot = styled.div`
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
    <ContentFramesRoot>
      <ContentFramesChild />
      <TextFrame>
        <RectangularFrames
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "23",
            background: "#d9d9d9",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#d9d9d9" },
            height: 75,
          }}
        >
          {/* <img src={logo} alt="VIT Vedant Logo" /> */}
        </RectangularFrames>
      </TextFrame>
      <SubtitleFrames>
        <SubjectsFrame>
          <NameTexts>
            <Kapil>Kapil</Kapil>
          </NameTexts>
          <Mca>MCA</Mca>
        </SubjectsFrame>
      </SubtitleFrames>
      <NoOfSubjectsFrame>
        <SubjectsAndLecturesFrame
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "23",
            background: "#d73838",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#d73838" },
            height: 54,
          }}
        >
          My subjects
        </SubjectsAndLecturesFrame>
        <SubjectsAndLecturesFrame1>
          <SubjectsAndLecturesFrameChild />
          <NoOfSubjects>No of Subjects</NoOfSubjects>
        </SubjectsAndLecturesFrame1>
        <SubjectsAndLecturesFrame1>
          <SubjectsAndLecturesFrameChild />
          <NoOfSubjects>No of Lectures</NoOfSubjects>
        </SubjectsAndLecturesFrame1>
      </NoOfSubjectsFrame>
    </ContentFramesRoot>
  );
};

export default ContentFrames;
