import Dock from '@components/Dock';
import Navbar from '@components/Navbar';
import Firefox from '@windows/Firefox';
import Welcome from '@components/Welcome';
import Terminal from '@windows/Terminal';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import Resume from '@windows/Resume';

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Firefox />
            <Resume />
        </main>
    );
};

export default App;
