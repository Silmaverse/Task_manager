import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";

const MenuEmoji = ({editor}) => {


 const addEmoji = (emojiData) => {
     editor.chain().focus().insertContent(emojiData.emoji).run();
     setShowEmoji(false);
   };
 const [showEmoji, setShowEmoji] = useState(false);
 if (!editor) return null;

  return (
    <>
      <div className="relative">
        <button onClick={() => setShowEmoji(!showEmoji)}><BsEmojiSmile/></button>
        {showEmoji && (
          <div style={{ position: "absolute", left: "10px", zIndex: 999 }}>
            <EmojiPicker onEmojiClick={addEmoji} />
          </div>
        )}
      </div>
    </>
  );
};

export default MenuEmoji;
