import type {FC} from "react";

import {Leafwatch} from "@helpers/leafwatch";
import {APP_NAME} from "@hey/data/constants";
import {MISCELLANEOUS} from "@hey/data/tracking";
import cn from "@hey/ui/cn";
import Link from "next/link";

const currentYear = new Date().getFullYear();

const links = [
  {
    href: "https://ctblock.cn",
    label: "草田链",
    onClick: () => console.log(MISCELLANEOUS.FOOTER.OPEN_CTBROWSER)
  }
];

const Footer: FC = () => {
  const isStaff = false;

  return (
    <footer
      className={cn(
        isStaff ? "top-28" : "top-20",
        "sticky mt-4 flex flex-wrap gap-x-[12px] gap-y-2 px-3 text-sm lg:px-0"
      )}
    >
      <span className="ld-text-gray-500 font-bold">
        &copy; {currentYear} {APP_NAME}.xyz
      </span>
      {links.map((link) => (
        <Link
          className="outline-offset-4"
          href={link.href}
          key={link.href}
          onClick={link.onClick}
          rel="noreferrer noopener"
          target={link.href.startsWith("http") ? "_blank" : undefined}
        >
          {link.label}
        </Link>
      ))}
    </footer>
  );
};

export default Footer;
