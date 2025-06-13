import { useState, useEffect } from "react";
import type { Invitations } from "../types/types";

const useInvitations = (token: string) => {
  const [invitations, setInvitations] = useState<Invitations[]>([]);

  useEffect(() => {
    const getAllInvitations = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/invitation`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      const json = await response.json();

      if (!response.ok) throw new Error(json.message);
      setInvitations(json.data);
    };
    getAllInvitations();
    
  }, [token]);

  return invitations;
};

export default useInvitations;
