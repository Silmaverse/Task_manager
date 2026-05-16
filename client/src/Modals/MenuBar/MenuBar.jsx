import { FaYoutube } from "react-icons/fa";
import { Menufunction } from "./Menufunction/Menufunction";
import MenuList from "./Menufunction/MenuList";
import Menupara from "./Menufunction/Menupara";
import MenuImage from "./Menufunction/MenuImage";
import MenuLink from "./Menufunction/MenuLink";
import Menufile from "./Menufunction/Menufile";
import Menuvideo from "./Menufunction/Menuvideo";
import Menutext from "./Menufunction/Menutext";
import { MenuDone } from "./Menufunction/MenuDone";

export default function MenuBar({editor,EditorContent }) {
  const handleEditorChange = () => {
  const html = editor.getHTML();

  setprojectData((prev) => ({
    ...prev,
    description: html,
  }));
};
 
  return (
    <div className="max-w-3xl mx-auto  border border-background rounded-lg shadow-md bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-3 text-[#7E7E8F]  rounded-t-2xl">
        <Menutext editor={editor}/>
        <Menufunction editor={editor}/>
        <MenuList editor={editor}/>
        <Menupara editor={editor}/>
        <MenuImage editor={editor}/>
        <MenuLink editor={editor}/>
        <Menufile editor={editor}/>
        <Menuvideo editor={editor}/>
        <MenuDone editor={editor}/>
      </div>
      <div className="p-4 min-h-62.5">
        
         <EditorContent editor={editor} />
        
        
      </div>

      
    </div>
  );
}
