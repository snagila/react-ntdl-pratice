import "./App.css";
import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";

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
