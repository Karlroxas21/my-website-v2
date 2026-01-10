import { navIcons, navLinks } from "@constants/index"
import dayjs from "dayjs";

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/public/images/logo.svg" />
                <p className="font-bold">Karl's Website</p>

                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
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
    )
}

export default Navbar