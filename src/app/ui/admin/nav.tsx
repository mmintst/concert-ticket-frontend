import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="h-full pt-16">
      <div className="font-bold text-[40px] ml-6">Admin</div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <Link href="/admin" className="flex py-4 px-2 gap-2">
            <Image
              src="/icon/home.svg"
              width={24}
              height={24}
              alt="home icon"
            />
            <div>Home</div>
          </Link>
          <Link href="/admin/history" className="flex py-4 px-2 gap-2">
            <Image
              src="/icon/history.svg"
              width={24}
              height={24}
              alt="history icon"
            />
            <div>History</div>
          </Link>
          <Link href="/user" className="flex py-4 px-2 gap-2">
            <Image
              src="/icon/switch.svg"
              width={24}
              height={24}
              alt="switch icon"
            />
            <div>Switch to user</div>
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
    </div>
  );
}
