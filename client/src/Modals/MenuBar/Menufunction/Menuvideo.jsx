import React, { useState } from "react";
import { MdOutlineVideocam } from "react-icons/md";

const Menuvideo = ({editor}) => {
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const addYoutubeVideo = () => {
    if (!youtubeUrl) return;

    editor
      .chain()
      .focus()
      .insertContent(
        `
        <div class="video-wrapper">
          <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
          frameborder="0" allowfullscreen></iframe>
        </div>
      `,
      )
      .run();

    setYoutubeUrl("");
  };

  if (!editor) return null;

  return (
    <div>
      <button
        onClick={addYoutubeVideo}
        className="p-2 hover:bg-gray-200 rounded"
      >
        <MdOutlineVideocam size={18} />
      </button>
    </div>
  );
};

export default Menuvideo;
