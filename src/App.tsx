import Dock from '@components/Dock';
import Navbar from '@components/Navbar';
import Firefox from '@windows/Firefox';
import Welcome from '@components/Welcome';
import Terminal from '@windows/Terminal';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Firefox />
        </main>
    );
};

export default App;
