import jwt from "jsonwebtoken";
export const CheckIfUserHasAdminRole = (token) => {
    const decodedToken = jwt.decode(token);

    if (decodedToken.claims.role === "admin") {
        return true;
    } else {
        return false;
    }
}