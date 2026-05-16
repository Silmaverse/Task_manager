import React, { useState } from "react";
import { IoLinkOutline } from "react-icons/io5";

const MenuLink = ({ editor }) => {
  
  const [url, setUrl] = useState("");
  const [linkOpen, setlinkOpen] = useState(false);
  const addLink = () => {
    if (!url) return;

    editor.chain().focus().setLink({ href: url }).run();

    setUrl("");
    setlinkOpen(false);

    // editor.chain().focus().unsetLink().run();
  };
  if (!editor) return null;

  return (
    <div>
      <div className="relative inline-block">
        {/* Button */}
        <button onClick={() => setlinkOpen(!linkOpen)} className="">
          <IoLinkOutline size={20} />
        </button>

        {/* Popover */}
        {linkOpen && (
          <div className="absolute top-10 left-0 z-50 w-64 p-3 bg-white rounded-lg shadow-lg">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL..."
              className="w-full px-2 py-1 border border-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => setlinkOpen(false)}
                className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={addLink}
                className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuLink;
