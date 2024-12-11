export const authConfig = {
  pages: {
    signIn: "/login",
    error: "/error",
  },
  providers:[],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      }
      return true;
    },
  },
  secret: process.env.AUTH_SECRET,
};
