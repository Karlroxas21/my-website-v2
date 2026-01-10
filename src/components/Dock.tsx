import { dockApps } from '@constants/index';
import { useRef } from 'react'
import { Tooltip } from 'react-tooltip';

/**
 * 
 * @returns  id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
 */

interface DockApps {
    id: string;
    name: string;
    icon: string;
    canOpen: boolean;
}
const Dock = () => {
    const dockRef = useRef(null);

    // const toggleApp = ({ id, canOpen }: Pick<DockApps, 'id' | 'canOpen'>) => {

    // }

    return (
        <section id="dock">

            <div ref={dockRef} className='dock-container'>
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className='relative flex justify-center'>
                        <button
                            type="button"
                            className='dock-icon'
                            aria-label={name}
                            data-tooltip-id={"dock-tooltip"}
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}>
                            <img
                                src={icon}
                                alt={name}
                                loading={"lazy"}
                                className={canOpen ? "" : "opacity-60"}
                            />

                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip" place="top" className="tooltip"/>
            </div>
        </section>
    )
}

export default Dock