import GoalStackList from "./components/GoalStackList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App px-3 py-3 h-screen bg-gray-100 dark:bg-zinc-900">
      <div className="container mx-auto">
        <Header />

        <GoalStackList />
      </div>
    </div>
  );
}

export default App;
