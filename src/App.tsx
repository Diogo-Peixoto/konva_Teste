import Dashboard from "./modules/Dashboard";
import { MainProvider } from "./modules/Editor/hooks";
import { GroupProvider } from "./modules/Editor/hooks/useGroup";
import Editor from "./modules/Editor/pages";
import EndTest from "./modules/End-Test";
import Test from "./modules/Test";
import GlobalStyled from "./style/global";

function App() {
  return (
    <>
      <MainProvider>
        <GroupProvider>
          <Editor />
        </GroupProvider>
      </MainProvider>

      <GlobalStyled />
    </>
  );
}

export default App;
