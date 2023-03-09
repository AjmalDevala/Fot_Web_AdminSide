import { Navigate } from "react-router-dom";
import Instance from "./src/components/config/Instance";

const protectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    Instance.get("/admin/verifyAdmin", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((response) => {
      const admin = response.data.admin;
      if (!admin) {
        localStorage.clear();
        window.location.reload();
        return <Navigate to={"/"} replace={true}></Navigate>;
      } else {
        return children;
      }
    });
  } else {
    localStorage.clear();
    window.location.reload();
    return <Navigate to={"/"} replace={true}></Navigate>;
  }

  return children;
};

export default protectedRoutes;
