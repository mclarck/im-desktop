import React from "react";
import style from "./style.module.css";
import useMainMenu from "./useMainMenu";
import { FaDolly } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import Link from "../link"; 

export default function MainMenu(props: any) {
  const {} = useMainMenu(props);
  return (
    <div className={style.mainMenu}>
      <nav>
        <ul>
          <li>
            <Link icon={FaDolly} to="stocks" />
          </li>
          <li>
            <Link icon={HiOutlineShoppingBag} to="operations" />
          </li>
          <li>
            <Link icon={BiSupport} to="chats" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
