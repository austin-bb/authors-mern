import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import AuthorForm from "./components/AuthorForm";
import Dashboard from "./views/Dashboard";
import Update from "./views/Update";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/authors/new" element={<AuthorForm />} />
                    <Route path="/authors/:id/edit" element={<Update />} />
                </Routes>
            </div>        
        </BrowserRouter>
    );
}

export default App;
