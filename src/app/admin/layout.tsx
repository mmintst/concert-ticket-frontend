import Nav from "../ui/admin/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-[240px] flex-none md:w-64">
        <Nav />
      </div>
      <div className="flex-grow p-6">{children}</div>
    </div>
  );
}
