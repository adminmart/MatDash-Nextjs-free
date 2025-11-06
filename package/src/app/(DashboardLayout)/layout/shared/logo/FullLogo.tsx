"use client";

import Image from "next/image";
import Link from "next/link";

const FullLogo = () => {
  return (
    <Link href={"/"}>
      {/* Dark Logo */}
      <Image
        src="/images/logos/dark-logo.svg"
        alt="logo"
        width={135}
        height={40}
        className="block dark:hidden rtl:scale-x-[-1]"
      />
      {/* Light Logo */}
      <Image
        src="/images/logos/dark-logo.svg"
        alt="logo"
        width={135}
        height={40}
        className="hidden dark:block rtl:scale-x-[-1]"
      />
    </Link>
  );
};

export default FullLogo;
