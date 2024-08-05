import { Link } from "react-router-dom";
type LinkProps = {
    link: string;
    title: string;
}[];

const LinkComponent: React.FC<LinkProps> = ({ links }) => {
    return (
        <div>
            {links.map((link: string, index: string) => {
                return (
                    <ul className="space-y-2 text-lg" key={index.toString()}>
                        <li className="text-lg max-w-[max-content] hover:border-b hover:border-b-dark ">
                            <Link to={link.link}>{link.title}</Link>
                        </li>
                    </ul>
                );
            })}
        </div>
    );
};

export default LinkComponent;
