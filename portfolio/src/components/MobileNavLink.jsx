import { Link } from 'react-router-dom';

export const MobileNavLink = ({ label, href, text, linkVariant, spanVariant }) => {
  return (
    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
      <Link
        aria-label={label}
        to={href}
        className={`relative text-sm font-medium box-border caret-transparent leading-5 px-3 py-1.5 ${linkVariant}`}
      >
        {text}
        <span
          className={`absolute bg-neutral-900 box-border caret-transparent block h-0.5 origin-[0%_50%] bottom-0 inset-x-3 ${spanVariant}`}
        ></span>
      </Link>
    </div>
  );
};

export default MobileNavLink;