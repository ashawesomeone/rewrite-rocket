import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className="flex py-3 justify-between border-b border-b-slate-200">
        <div className="container justify-between flex items-center">
          <div className="flex items-center gap-2">
            <svg
              fill="none"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              className="size-10 text-white bg-accent_one p-2 rounded-full"
            >
              <g clipPath="url(#clip0_1735_6488)">
                <path
                  d="M6.67742 20.5673C2.53141 18.0212 0.758026 12.7584 2.71678 8.1439C4.87472 3.0601 10.7453 0.68822 15.8291 2.84617C20.9129 5.00412 23.2848 10.8747 21.1269 15.9585C20.2837 17.945 18.8736 19.5174 17.1651 20.5673"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 16V20.4C17 20.7314 17.2686 21 17.6 21H22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22.01L12.01 21.9989"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1735_6488">
                  <rect fill="white" height="24" strokeWidth="1.5" width="24" />
                </clipPath>
              </defs>
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 text-white bg-accent_one p-2 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg> */}
            <span className="text-xl text-accent_one">RewriteRocket</span>
          </div>
          <div>
            <span className="text-md font-semibold text-accent_one">
              AI-powered rewrite tool
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
