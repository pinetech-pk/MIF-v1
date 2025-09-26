//srs/app/dashboard/page.tsx
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/");
  }

  const user = await getUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">MIF Dashboard</h1>
        <LogoutLink className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </LogoutLink>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Welcome, {user?.given_name}!
          </h2>
          <p className="text-gray-600">Email: {user?.email}</p>
          <p className="text-gray-600">Role: Donor</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Active Projects</h3>
          <p className="text-2xl font-bold text-blue-600">5</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Total Donations</h3>
          <p className="text-2xl font-bold text-green-600">$1,250</p>
        </div>
      </div>
    </div>
  );
}
