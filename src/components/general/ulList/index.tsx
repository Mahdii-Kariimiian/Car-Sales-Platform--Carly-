import { Link } from "react-router-dom";

type LinkComponentProps = {
    links: { link: string; title: string }[];
};

const LinkComponent: React.FC<LinkComponentProps> = ({ links }) => {
    return (
        <div className="max-lg:text-center">
            {links.map((linkItem, index) => (
                <ul className="space-y-2 text-lg" key={index}>
                    <li className="text-lg">
                        <Link
                            className="hover:border-b hover:border-b-dark"
                            to={linkItem.link}
                        >
                            {linkItem.title}
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default LinkComponent;
