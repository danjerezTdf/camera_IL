import React, { useState, useEffect } from "react";
import axios from "axios";

const AppToken = () => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    axios
      .post("https://openapi.lechange.cn:443/openapi/accessToken", {
        time: Date.now(),
        nonce: Math.random().toString(36).substring(7),
        appId: "lc938a8730c6154020",
        appSecret: "21b2f7c92e624c2c964081ca671832",
      })
      .headers({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": true,
      })
      .then((response) => {
        setAccessToken(response.data.accessToken);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Obtener token de acceso</h1>
      <p>El token de acceso es: {accessToken}</p>
    </div>
  );
};

export default AppToken;
