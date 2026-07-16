export const ROUTES = {
  public: ["/"],

  auth: ["/signin", "/signup"],

  protected: [
    "/dashboard",

    "/admin",
    "/teacher",
    "/student",
    "/dean",
    "/chairman",
  ],

  roles: {
    admin: "/admin",
    teacher: "/teacher",
    student: "/student",
    dean: "/dean",
    chairman: "/chairman",
  },
};