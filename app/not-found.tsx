import Link from "next/link";

export default function NotFound() {
  return (
    <article>
      <h1 className="home-name">Page not found</h1>
      <p className="lede">That link does not go anywhere on this site.</p>
      <Link href="/" className="more">
        Back home <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
