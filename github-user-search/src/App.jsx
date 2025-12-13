// src/App.jsx
import Search from "./components/Search";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <Search />
      <h1 className="text-3xl font-bold text-blue-600">
        Tailwind is working
      </h1>
    </div>
  );
}
