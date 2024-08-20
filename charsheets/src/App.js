import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Features/HomePage";

export default function App() {
  return <Router>{<HomePage />}</Router>;
}
