import { useState } from "react";
import React from "react";
import "./Tokenomics.css";

const Tokenomics = () => {
  const [isCopied, setIsCopied] = useState(false);
  const addressText = "Cc3voFEFTrGmnhnP8x77ncZ6pivG8Kk9ir1t8AhBBaby";

  const handleCopyClick = () => {
    const tempInput = document.createElement("input");
    tempInput.value = addressText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="tokenomics_section">
      <div className="tokenomics_box">
        <button className="token_btn token_btn-ca">CONTRACT ADDRESS</button>
        <p className="address">{addressText}</p>
        <button className="token_btn token_btn-copy" onClick={handleCopyClick}>
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="tokenomics-box">
        <p className="tokenomics-box_header">$GHOSTWIFHAT TOKENOMICS</p>

        <div className="tokenomics-box_flex">
          <div className="tokenomics-mini_box">
            <p className="">Supply</p>
            <p className="">
              <b>99,999,934.95</b>
            </p>
          </div>

          {/* <div className="tokenomics-mini_box">
            <p className="">Lp Tokens</p>
            <p className="">Burnt</p>
          </div> */}

          <div className="tokenomics-mini_box">
            <p className="">Ownership</p>
            <p className="">
              <b>Renounced</b>
            </p>
          </div>

          <div className="tokenomics-mini_box">
            <p className="">Team Tokens</p>
            <p className="">
              <b>0</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
