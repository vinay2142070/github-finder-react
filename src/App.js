import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";
export default function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar></Navbar>

            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:login" element={<User />}></Route>
                <Route path="/notfound" element={<Notfound />}></Route>
                <Route path="/*" element={<Notfound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}