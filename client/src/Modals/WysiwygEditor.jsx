import React from 'react'
import MenuBar from './MenuBar/MenuBar'
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { Extension } from "@tiptap/core";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import FileHandler from "@tiptap/extension-file-handler";
import Youtube from "@tiptap/extension-youtube";

const WysiwygEditor = ({setprojectData}) => {
  const ParagraphIndent = Extension.create({
    name: "paragraphIndent",

    addGlobalAttributes() {
      return [
        {
          types: ["paragraph"],
          attributes: {
            indent: {
              default: 0,
              renderHTML: (attributes) => {
                if (!attributes.indent) return {};
                return {
                  style: `padding-left: ${attributes.indent * 24}px`,
                };
              },
              parseHTML: (element) => ({
                indent: parseInt(element.style.paddingLeft) / 24 || 0,
              }),
            },
          },
        },
      ];
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      ParagraphIndent,
      TextStyle, Color,
      Link.configure({
        openOnClick: false, // Prevents active states/triggers on simple clicks
        linkOnPaste: true,
        autolink: false,
        protocols: ["ftp", "http", "https"],
      }),
      Image.configure({
        resize: {
          enabled: true,
          directions: ["top", "bottom", "left", "right"], // can be any direction or diagonal combination
          minWidth: 50,
          minHeight: 50,
          alwaysPreserveAspectRatio: true,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start writing something amazing...",
      }),
      Highlight.configure({
        multicolor: true,
      }),
      FileHandler.configure({
        allowedMimeTypes: ["image/jpeg", "image/png", "image/gif"],
      }),
      Youtube.configure({
        controls: true,
        nocookie: true,
        HTMLAttributes: {
          class: "w-full rounded-lg",
        },
      }),
      
    ],
    onUpdate({ editor }) {
      setprojectData((prev) => ({
        ...prev,
        description: editor.getText(),
      }));
    }
  });

  

  
  if (!editor) return null;
  return (
    <>
     <div>
      <MenuBar editor={editor} EditorContent={EditorContent} />
      {/* Editor */}
      
     </div>
    
    </>
  )
}

export default WysiwygEditor