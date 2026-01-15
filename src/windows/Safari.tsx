import WindowWrapper from '@hoc/WindowWrapper';
import WindowControls from '../components/WindowControls';
import { PanelLeft } from 'lucide-react';

const Safari = () => {
    return (
        <>
            <div id="window-header" >
                <div className="border-r">
                    <PanelLeft className="icon" />
                </div>
                <WindowControls target={'safari'} />

                <div className=""></div>
            </div>
            <div>
                TEST
            </div>
        </>
    );
};

const SafariWindows = WindowWrapper(Safari, 'safari');

export default SafariWindows;
