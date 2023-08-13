"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("13547d59-214f-4760-8c05-f2528202356e");
  }, []);

  return null;
};
