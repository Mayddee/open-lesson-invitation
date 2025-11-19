export default function FlyingBooks() {
  return (
    <div className="flying-books-layer">
      <div className="book book1"><BookSvg /></div>
      <div className="book book2"><BookSvg /></div>
      <div className="book book3"><BookSvg /></div>
      <div className="book book4"><BookSvg /></div>
      <div className="book book5"><BookSvg /></div>
    </div>
  );
}

function BookSvg() {
  return (
    <svg
      className="book-svg"
      viewBox="0 0 40 55"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="5" width="32" height="45" rx="4" fill="#2f5b43" />
      <rect x="3" y="5" width="7" height="45" rx="3" fill="#234333" />
      <rect x="10" y="10" width="22" height="30" rx="2" fill="#f6f0dd" />
      <line x1="12" y1="18" x2="30" y2="18" stroke="#dfd2b8" />
      <line x1="12" y1="22" x2="30" y2="22" stroke="#dfd2b8" />
      <line x1="12" y1="26" x2="30" y2="26" stroke="#dfd2b8" />
      <circle cx="21" cy="15" r="4" fill="#c9a44f" />
    </svg>
  )
}
