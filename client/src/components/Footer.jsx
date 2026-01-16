import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/event">See gigs</Link>
          <Link to="/form">Submit new gig</Link>
        </nav>
      </footer>
    </>
  );
}
