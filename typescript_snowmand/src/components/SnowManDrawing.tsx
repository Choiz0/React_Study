import React, { useState, useEffect } from "react";

type snowProps = {
  incorrectNum: number;
};

const SnowManDrawing = ({ incorrectNum }: snowProps) => {
  const [imageUrl, setImageUrl] = useState<string>(`/imgs/Snowman-1.jpg`);

  useEffect(() => {
    setImageUrl(`/imgs/Snowman-${incorrectNum}.jpg`);
  }, [incorrectNum]);

  return (
    <div
      style={{
        maxWidth: "300px",
        maxHeight: "300px",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        src={imageUrl}
      />
    </div>
  );
};

export default SnowManDrawing;
