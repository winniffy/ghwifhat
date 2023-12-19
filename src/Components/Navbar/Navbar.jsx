import React, { useState } from "react";
import "./Navbar.css";
import { Spin as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ logo }) => {
  // mobile menu state
  const [isMenuOpen, setMenuOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <nav>
      {/* logo */}
      <img src={logo} alt="gif logo" />

      {/* nav list items */}
      <ul className="navlist">
        <a href="https://t.co/Kih6IQWH15" target="_blank" rel="noreferrer">
          <li className="navitem">Twitter(X)</li>
        </a>
        <a href="https://t.co/iubclBM3sH" target="_blank" rel="noreferrer">
          <li className="navitem">Telegram</li>
        </a>
        <a href="https://t.co/6SF27Swspb" target="_blank" rel="noreferrer">
          <li className="navitem">Chart</li>
        </a>
      </ul>

      {/* nav buttons */}
      <ul className="navbuttons">
        <a href="https://t.co/6SF27Swspb" target="_blank" rel="noreferrer">
          <button className="btn buy_btn">Buy $GIF</button>
        </a>
      </ul>

      {/* mobile nav */}
      <Hamburger rounded toggled={isMenuOpen} toggle={setMenuOpen} />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu_container"
            key="menu"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <motion.ul
              className="navlist_mobile"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.a href="https://t.co/Kih6IQWH15" variants={item}>
                <li className="navitem">Twitter(X)</li>
              </motion.a>
              <motion.a ref="https://t.co/iubclBM3sH" variants={item}>
                <li className="navitem">Telegram</li>
              </motion.a>
              <motion.a href="https://t.co/6SF27Swspb" variants={item}>
                <li className="navitem">Chart</li>
              </motion.a>
              {/* nav buttons */}
              <motion.li className="navitem_btn" variants={item}>
                <a href="https://t.co/6SF27Swspb">
                  <button className="btn_mobile register_btn-mobile">
                    BUY $GIF
                  </button>
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
