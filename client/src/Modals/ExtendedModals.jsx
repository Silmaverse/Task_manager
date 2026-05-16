import React, { useState } from "react";
import Button from "../componenets/ui/Button";
import WysiwygEditor from "./WysiwygEditor";
import CreateUrl from "./CreateUrl";

const ExtendedModals = () => {
  const [createproject, setcreateproject] = useState(true);
  const[link,setlink]=useState("")
  const [projectData,setprojectData]=useState({
     title:"",
     description:"",
  })
  
  const handleInputChange=(e)=>{
      setprojectData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
 console.log(projectData)
  const handleSubmit = (e) => {
    e.preventDefault();
    const slug = projectData.title.toLowerCase().replace(/\s+/g, "-");
    const projectlink = window.location.origin + "/projects/" + slug;
    setlink(projectlink);
    setcreateproject(false);
  };

  return (
    <>
      {createproject && (
        <>
          <h6 className="text-xl text-textprimary font-poppins font-semibold text-center mb-12">
            Create a New Project
          </h6>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="w-full">
              <label
                htmlFor="Project"
                className="text-[16px] mb-2.5! inline-block  text-textprimary font-poppins font-medium text-center"
              >
                Project Name
              </label>
              <input
                id="Project"
                placeholder="Type name here"
                name="title"
                value={projectData.title}
                onChange={handleInputChange}
                className="text-sm  font-poppins font-normal text-[#9A9AAF] w-full outline-2 outline-background rounded-lg pl-3.25 py-4"
              ></input>
              <label
                htmlFor="Project"
                className="text-[16px] mt-7.5 mb-2.5! inline-block  text-textprimary font-poppins font-medium text-center"
              >
                Description
              </label>
              <WysiwygEditor setprojectData={setprojectData} />
              <div className="w-full">
                <Button
                  variant={"secondary"}
                  children={"Create"}
                  customstyles={"block ml-auto text-[14px]"}
                ></Button>
              </div>
            </div>
          </form>
        </>
      )}
      {!createproject && <CreateUrl  url={link}/>}
    </>
  );
};

export default ExtendedModals;
