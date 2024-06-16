import React, { FC } from "react";
import Image from "next/image";
import style from "./bottomNav.module.css";
import Center from "../Center";

const BottomNav = () => {
  return (
    <div>
      <div className={style.bottomNav} style={{ color: "white" }}>
        <div style={{ marginRight: "20px" }}>
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p
            style={{
              fontSize: "12px",
              margin: "10px 0px",
            }}
          >
            Get 10% off your first order
          </p>
          <div className={style.InputIconHolder}>
            <input type="text" placeholder="Enter Your Email" />
            <Image
              alt="Glass"
              src={"Icons/cart.svg"}
              width={20}
              height={20}
              className={style.emailIconSend}
            />
          </div>
        </div>

        <Column
          title="Support"
          list={[
            "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
            "exclusive@gmail.com",
            "+88015-88888-9999",
          ]}
        />
        <Column
          title="Account"
          list={["My Account", "Login/Register", "Cart", "Wishlist", "Shop"]}
        />
        <Column
          title="Quick Link"
          list={["Privacy Policy", "Term Of Use", "FAQ", "Contact"]}
        />
        <div>
          <h3>Download App</h3>
          <p
            style={{
              fontSize: "10px",
              color: "rgb(192,192,192)",
              marginBottom: "10px",
            }}
          >
            Save $3 with App New User Only
          </p>
          <div className={style.Download}>
            <Image
              alt="Download"
              src={"/Icons/Download.png"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Center
        child={
          <p className={style.RightsRes}>
            © Copyright Abdullah K. 2024. All right reserved
          </p>
        }
      />
    </div>
  );
};

export default BottomNav;

interface ColumnProps {
  title: string;
  list: string[];
}

const Column: FC<ColumnProps> = ({ title, list }) => {
  return (
    <div className={style.column}>
      <h3>{title}</h3>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <p style={{ fontSize: "12px" }}>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
