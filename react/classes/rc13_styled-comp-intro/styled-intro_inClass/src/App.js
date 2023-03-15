import { Button } from "./components/Buton.styled";
import { FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";
import Links from "./components/Links";
import Sarmal from "./components/Sarmal";

const App = () => {
  return (
    <>
      <Sarmal bg="#dede">
        <HeaderText giveColor="red">Styled Components</HeaderText>
        <HeaderText giveColor="turquoise" bgColor="pink">
          Styled Components
        </HeaderText>
        <Button>Send</Button>
        <Button primary>Send</Button>
        <FS13Button react>Work</FS13Button>
        <FS13Button>More!</FS13Button>
      </Sarmal>
      <Sarmal>
        <Links href="https://www.google.com" target="_blank">
          TheCorrect Web Site
        </Links>
        <Links small href="https://www.reactjs.org" target="_blank">
          The React JSite
        </Links>
        <Links small href="https://www.npmjs.org" target="_blank">
          NPM
        </Links>
      </Sarmal>
    </>
  );
};

export default App;
