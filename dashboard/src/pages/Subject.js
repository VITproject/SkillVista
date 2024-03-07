import ContentFrames from "../components/ContentFrames";
import styled from "styled-components";
import { Button } from "@mui/material";

const ChildFramesChild = styled(Button)`
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
const ChildFrames = styled(Button)`
  position: absolute;
  top: 179px;
  left: 937px;
  background-color: var(--color-gainsboro);
  width: 429px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 73px;
  box-sizing: border-box;
`;
const ChildFrames1 = styled(Button)`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 446px;
  left: 431px;
`;
const ChildFrames2 = styled(Button)`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 446px;
  left: 937px;
`;
const ChildFrames3 = styled(Button)`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 713px;
  left: 431px;
`;
const ChildFrames4 = styled(Button)`
  border: none;
  background-color: var(--color-gainsboro);
  height: 216px;
  width: 429px;
  outline: none;
  position: absolute;
  top: 713px;
  left: 937px;
`;
const ArrowVectorChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 1440px;
  height: 76px;
  display: none;
`;
const RectangleNode = styled.div`
  position: absolute;
  top: 12px;
  left: 1326px;
  background-color: #b55f5f;
  width: 79px;
  height: 49px;
  z-index: 1;
`;
const ArrowVector = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-gainsboro);
  width: 1440px;
  height: 76px;
`;
const ChildFrames5 = styled.div`
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
  padding: 65px;
  box-sizing: border-box;
`;
const FRAME = styled.main`
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
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Subject = () => {
  return (
    <SubjectRoot>
      <FRAME>
        <ContentFrames />
        <ChildFrames>
          <ChildFramesChild />
          <Os>os</Os>
        </ChildFrames>
        
        <ChildFrames1 rows={11} cols={21} />
        <ChildFrames2 rows={11} cols={21} />
        <ChildFrames3 rows={11} cols={21} />
        <ChildFrames4 rows={11} cols={21} />
        <ArrowVector>
          <ArrowVectorChild />
          <RectangleNode />
        </ArrowVector>
        <ChildFrames5>
          <ChildFramesChild />
          <Os>os</Os>
        </ChildFrames5>
      </FRAME>
    </SubjectRoot>
  );
};

export default Subject;
