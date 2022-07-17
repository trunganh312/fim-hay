import React, { useEffect } from "react";

function NotFound(props) {
  useEffect(() => {
    document.title = "404 Không tìm thấy - eCinema";
  });
  return (
    <div
      style={{
        width: "512px",
        height: "100%",
        margin: "auto",
      }}
    >
      <img src="https://e-cinema.vercel.app/not-found.png" alt="" />
    </div>
  );
}

export default NotFound;
