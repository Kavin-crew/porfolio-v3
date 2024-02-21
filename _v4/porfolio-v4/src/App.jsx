import MainNav from './ui/MainNav';
import Logo from './ui/Logo';
import Button from './ui/Button';
import DarkModeToggle from './ui/DarkModeToggle';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
    return (
        <DarkModeProvider>
            <header>
                <Logo />
                <MainNav />
                <Button>Download CV</Button>
                <DarkModeToggle />
            </header>
        </DarkModeProvider>
    );
}

export default App;
