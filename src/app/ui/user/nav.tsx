import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="h-full pt-16">
      <div className="font-bold text-[40px] ml-6">User</div>
      <div className="flex flex-col justify-between h-full">
        <Link href={"/admin"} className="flex py-4 px-2 gap-2">
          <Image
            src="/icon/switch.svg"
            width={24}
            height={24}
            alt="switch icon"
          />
          <div>Switch to admin</div>
        </Link>
      </div>
      <div className="flex py-4 px-2 gap-2">
        <Image
          src="/icon/logout.svg"
          width={24}
          height={24}
          alt="logout icon"
        />
        <div>Logout</div>
      </div>
    </div>
  );
}
