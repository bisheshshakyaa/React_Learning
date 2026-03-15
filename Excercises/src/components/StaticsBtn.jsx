import React from "react";
import "../css/StaticBtn.css";
export function StaticBtn({ btnStatus, setBtnStatus }) {
  function ChangeState() {
    // State Change garna ko lagi function create Gare. Also a updater Function
    setBtnStatus(!btnStatus); //  J cha tesko ulta garne for status
  }

  return (
    <div>
      <button
        className={btnStatus === false ? "StaticBtn" : "StaticBtn-2"}
        onClick={ChangeState}
      >
        {btnStatus ? "OFF" : "ON"}
      </button>
    </div>
  );
}
