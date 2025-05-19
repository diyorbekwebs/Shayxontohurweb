import React from "react";
import { list } from "../../constant/index";
import { Link } from "react-router-dom";
import { Globe, Logo } from "../../assets/img/img";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container">
        <div
          className="flex items-center justify-between border-b pt-[30px] pb-[10px]"
          style={{ borderBottomColor: "#a3a3a380" }}
        >
          <div className="flex items-center gap-[73px]">
            <div className="flex items-center gap-[10px]">
              <img src={Logo} alt="Logo" />
              <h3 className="font-bold text-[14px] w-[260px]">
                Toshkent Shahar shayxontohur Tuman Politexnikumi
              </h3>
            </div>
            <ul className="flex gap-[16px]">
              {list?.map((e) => (
                <li key={e.id} className="text-[16px]">
                  <Link to={e.link}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-[5px]">
            <img src={Globe} alt="Globe" />
            <p>Uz</p>
          </div>
        </div>
      </div>
    </header>
  );
}
// 