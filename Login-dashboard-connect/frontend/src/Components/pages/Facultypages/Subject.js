import ContentFrames from "../../FacultyDashboard/FacultyContentFrames";
import styled from "styled-components";

const Button = styled.div`
  height: 216px;
  width: 429px;
  position: relative;
  background-color: var(--color-gainsboro);
  display: none;
`;
const Os = styled.div`
  height: 70px;
  width: 253px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
`;
const ChildFrames = styled.div`
  position: absolute;
  top: 179px;
  left: 937px;
  background-color: var(--color-gainsboro);
  width: 429px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-54xl);
  box-sizing: border-box;
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
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 1440px;
  height: 76px;
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
const RectangleParent = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 1440px;
  height: 76px;
`;
const ChildFrames1 = styled.div`
  position: absolute;
  top: 179px;
  left: 431px;
  background-color: var(--color-gainsboro);
  width: 429px;
  height: 216px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-46xl);
  box-sizing: border-box;
`;
const FrameOSButton = styled.main`
  align-self: stretch;
  height: 1024px;
  position: relative;
  text-align: center;
  font-size: var(--font-size-4xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const SubjectChild = styled.img`
  margin-top: -708px;
  margin-bottom: -708px;
  width: 12.1px;
  height: 708px;
  position: relative;
  object-fit: contain;
`;
const SubjectRoot = styled.div`
  width: 100%;
  height: 1024px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Subject = () => {
  return (
    <SubjectRoot>
      <FrameOSButton>
        <ContentFrames />
        <ChildFrames>
          <Button />
          <Os>os</Os>
        </ChildFrames>
        <Button1 rows={11} cols={21} />
        <Button2 rows={11} cols={21} />
        <Button3 rows={11} cols={21} />
        <Button4 rows={11} cols={21} />
        <RectangleParent>
          <FrameChild />
          <LoginlogoutButton />
        </RectangleParent>
        <ChildFrames1>
          <Button />
          <Os>os</Os>
        </ChildFrames1>
      </FrameOSButton>
      {/* <SubjectChild alt="" src="/arrow-1.svg" /> */}
    </SubjectRoot>
  );
};

export default Subject;
