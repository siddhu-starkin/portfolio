export type MobileNavLinkProps = {
  label: string;
  href: string;
  text: string;
  linkVariant: string;
  spanVariant: string;
};

export const MobileNavLink = (props: MobileNavLinkProps) => {
  return (
    <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
      <a
        aria-label={props.label}
        href={props.href}
        className={`relative text-sm font-medium box-border caret-transparent leading-5 px-3 py-1.5 ${props.linkVariant}`}
      >
        {props.text}
        <span
          className={`absolute bg-neutral-900 box-border caret-transparent block h-0.5 origin-[0%_50%] bottom-0 inset-x-3 ${props.spanVariant}`}
        ></span>
      </a>
    </div>
  );
};
