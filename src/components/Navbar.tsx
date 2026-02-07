import { navIcons, navLinks } from '@constants/index';
import useWindowStore from '@store/window';
import dayjs from 'dayjs';

const Navbar = () => {
    const { openWindow } = useWindowStore();
    return (
        <nav>
            <div>
                <p className="font-bold">Karl's Website</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type, null)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    );
};

export default Navbar;
