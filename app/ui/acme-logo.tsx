import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center leading-none text-white`}
    >
      <Image
        width={100}
        height={100}
        src="/bjss.svg"
        alt="Acme Logo"
        className="brightness-0 invert"
      />
    </div>
  );
}
