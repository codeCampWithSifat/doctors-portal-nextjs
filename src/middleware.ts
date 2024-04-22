import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
const hybridRoutes = ["/", "/login", "/register"];
const patientsAccessRoutes = [
  "/dashboard",
  "/book-appointment",
  "/my-appointments",
  "/my-profile",
  "/payment",
  "/payment-history",
];

const rolesRedirect: Record<string, unknown> = {
  doctor: "http://localhost:3000/doctors/dashboard",
  patient: "http://localhost:3000/dashboard",
  admins: "http://localhost:3000/admins/dashboard",
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect("http://localhost:3000/login");
  }

  const role = token?.role as string;
  if (
    (role === "admin" && pathname.startsWith("/admins")) ||
    (role === "patient" && patientsAccessRoutes.includes(pathname)) ||
    (role === "doctor" && pathname.startsWith("/doctors"))
  ) {
    return NextResponse.next();
  }

  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    // patient routes
    "/dashboard",
    "/book-appointment",
    "/my-appointments",
    "/my-profile",
    "/payment",
    "/payment-history",
    // doctor routes
    "/doctors/:page*",
  ],
};
