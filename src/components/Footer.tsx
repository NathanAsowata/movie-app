import Link from "next/link";

const Footer = () => {
  return (
    <footer
      role={"footer"}
      className="bg-slate-900 text-white py-2 text-center"
    >
      <p>
        Designed and built by &nbsp;
        <Link
          href={"https://www.nathanasowata.com/"}
          target={"_blank"}
          className="text-slate-400 hover:underline"
        >
          Nathan Asowata
        </Link>
        . &nbsp; Data provided by &nbsp;
        <Link
          href={"https://www.themoviedb.org/"}
          target={"_blank"}
          className="text-slate-400 hover:underline"
        >
          TheMovieDB
        </Link>
      </p>
      <p>
        All rights reserved. &copy;{" "}
        <span data-testid="date">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
