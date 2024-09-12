import store from "./store/store";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Advertisements from "./pages/advertisments";
import NavigationPanel from "./components/navigationPanel";
import Advertisement from "./pages/advertisement";
import Orders from "./pages/orders";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <NavigationPanel />
                <Routes>
                    <Route path="/" element={<Advertisements />} />
                    <Route path="/advertisements/:id" element={<Advertisement />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
