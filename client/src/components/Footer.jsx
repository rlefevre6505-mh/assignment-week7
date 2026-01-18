import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/form">Submit new gig</Link>
          <Link to="/posts">See gigs</Link>
        </nav>
      </footer>
    </>
  );
}
