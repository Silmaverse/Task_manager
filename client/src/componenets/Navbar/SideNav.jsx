import React from "react";
import item1 from  "../../assets/images/Left sidebar item.png"
import item2 from  "../../assets/images/item2.png"
import item3 from  "../../assets/images/item3.png"
import item4 from  "../../assets/images/item4.png"
import item5 from  "../../assets/images/item5.png"
import item6 from  "../../assets/images/item6.png"
import seller1 from "../../assets/images/seller1.png"
import seller2 from "../../assets/images/seller2.png"
import star from '../../assets/images/start-sun.png'
import arrowup from '../../assets/images/arrow-two-side.png'


const SideNav = () => {
  return (
    <>
    <section>

      <div className="w-29.25 h-full pb-6 px-6 pt-8  flex flex-col justify-between  items-center">
        <div className="flex flex-col gap-4 items-center">
        <div className="menu flex flex-col gap-4  border-b border-b-background w-17 pb-4 items-center">
          <div className="item1 w-15.5 h-15.5">
            <img src={item1} className="w-full" alt="Error" />
          </div>
          <div className="item1 w-5.5 h-5.5">
            <img src={item2} className="w-full" alt="Error" />
          </div>
          <div className="item1 w-5.5 h-5.5">
            <img src={item3} className="w-full" alt="Error" />
          </div>
          <div className="item1 w-5.5 h-5.5">
            <img src={item4} className="w-full" alt="Error" />
          </div>
          <div className="item1 w-5.5 h-5.5">
            <img src={item5} className="w-full" alt="Error" />
          </div>
          <div className="item1 w-5.5 h-5.5">
            <img src={item6} className="w-full" alt="Error" />
          </div>
        </div>
        <div className="sellers pt-4">
          <p className="font-poppins font-semibold text-xs text-textprimary">Sellers</p>
          <div className="sellersimg mt-3.75">
             <div className="w-9 h-9 relative rounded-full">
              <img src={seller1} alt="error" />
             <div className="w-9 absolute left-6 -z-1 top-0 h-9 rounded-full">
              <img src={seller2} alt="error" />
             </div>
             </div>
          </div>
        </div>
        </div>
        

          <div className="w-18 h-13.25 bg-background rounded-xl flex py-2.75 px-2  gap-1 items-center">
              <div className="w-6 h-5">
                <img src={star} alt="error" className="w-full h-full"/>
              </div>
              <div className="w-0.5 h-7.75 bg-primary "></div>
              <div className="w-6 h-5">
                <img src={arrowup} alt="error" className="w-full h-full" />
              </div>

          </div>
       
        
      </div>
    </section>
    </>
  );
};

export default SideNav;
