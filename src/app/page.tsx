import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to MIF Platform
      </h1>

      {(await isAuthenticated()) ? (
        <div className="text-center">
          <p className="mb-4">Welcome back, {user?.given_name}!</p>
          <div className="space-x-4">
            <a
              href="/dashboard"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Go to Dashboard
            </a>
            <LogoutLink className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Logout
            </LogoutLink>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-6 text-gray-600">
            Join MIF Platform to support education, healthcare, and social
            welfare projects
          </p>
          <div className="space-x-4">
            <LoginLink className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 font-medium">
              Sign In
            </LoginLink>
            <RegisterLink className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 font-medium">
              Sign Up
            </RegisterLink>
          </div>
        </div>
      )}
    </main>
  );
}
