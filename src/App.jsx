import "./App.css";
import Header from "./components/app/Header";
import TaskContainer from "./components/app/taskcontainer/TaskContainer";

function App() {
  return (
    <>
      <div className="min-vh-100">
        <Header />
        <TaskContainer />
      </div>
    </>
  );
}

export default App;
