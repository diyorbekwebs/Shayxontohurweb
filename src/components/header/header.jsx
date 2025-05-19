import React from "react";
import { list } from "../../constant/index";
import { Link } from "react-router-dom";
import { Globe, Logo } from "../../assets/img/img";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div
          className="flex items-center justify-between border-b pt-[30px] pb-[10px]"
          style={{ borderBottomColor: "#a3a3a380" }}
        >
          <div className="flex items-center  gap-[73px]">
            <div className="flex items-center gap-[10px]">
              <img src={Logo} alt="" />
              <h3 className="font-bold text-[14px] w-[260px]">
                Toshkent Shahar shayxontohur Tuman Politexnikumi
              </h3>
            </div>
            <ul className="flex gap-[16px] ">
              {list?.map((e) => (
                <Link id={e.id} to={e.link}>
                  <li className="text-[16px]">{e.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex gap-[5px]">
            <img src={Globe} alt="" />
            <p>Uz</p>
          </div>
        </div>
      </div>
    </header>
  );
}
