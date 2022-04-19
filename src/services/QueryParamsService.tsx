import { useLocation } from "react-router-dom";
import { useContextActions } from "../context";

export const QueryParamsService = () => {
  const { handleGetPhone, handleOpenAuth } = useContextActions();

  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const openAuth = query.get("register");

  if (id) handleGetPhone(id);
  if (openAuth && JSON.parse(openAuth)) handleOpenAuth();

  return null;
};
