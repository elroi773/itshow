import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./onbording3.css";
import Navigate from "../../component/navigate";

export default function OnBording3() {
  const navigate = useNavigate();
  const location = useLocation();

  // onbording1/onbording2 에서 넘어온 이름(우선순위: route state -> localStorage)
  const routeName = location?.state?.name;
  const storedName =
    typeof window !== "undefined" ? localStorage.getItem("joinName") : "";
  const userName = (routeName || storedName || "회원").trim();

  // 카드/계좌 중 한 가지 선택
  const [method, setMethod] = useState(null); // 'card' | 'account' | null

  const isValid = useMemo(() => method === "card" || method === "account", [method]);

  return (
    <main className="join1-page">
      {/* Top Icon */}
      <div className="join1-iconWrap" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="76"
          viewBox="0 0 76 76"
          fill="none"
          className="join1-icon"
        >
          <path
            d="M37.0073 0.923103C37.1023 -0.307632 38.9064 -0.307638 39.0014 0.923097L41.1056 28.1873C41.1685 29.0033 42.1316 29.4022 42.7532 28.8697L63.5198 11.0789C64.4572 10.2758 65.7329 11.5515 64.9298 12.489L47.139 33.2555C46.6065 33.8771 47.0054 34.8402 47.8215 34.9032L75.0856 37.0074C76.3164 37.1023 76.3164 38.9064 75.0856 39.0014L47.8215 41.1056C47.0054 41.1686 46.6065 42.1317 47.139 42.7532L64.9298 63.5198C65.7329 64.4573 64.4572 65.7329 63.5198 64.9299L42.7532 47.139C42.1316 46.6066 41.1685 47.0055 41.1056 47.8215L39.0014 75.0857C38.9064 76.3164 37.1023 76.3164 37.0073 75.0857L34.9031 47.8215C34.8401 47.0055 33.877 46.6066 33.2555 47.139L12.4889 64.9298C11.5515 65.7329 10.2758 64.4573 11.0789 63.5198L28.8697 42.7532C29.4022 42.1317 29.0032 41.1686 28.1872 41.1056L0.923042 39.0014C-0.307693 38.9064 -0.307699 37.1023 0.923036 37.0074L28.1872 34.9032C29.0032 34.8402 29.4022 33.8771 28.8697 33.2555L11.0789 12.489C10.2758 11.5515 11.5515 10.2758 12.4889 11.0789L33.2555 28.8697C33.877 29.4022 34.8401 29.0033 34.9031 28.1873L37.0073 0.923103Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>

      {/* Card */}
      <section className="join1-card" aria-label="회원가입 3단계">
        <div className="join1-progressRow">
          <span className="join1-progressNow">03</span>
          <span className="join1-progressSlash">/</span>
          <span className="join1-progressTotal">03</span>
        </div>

        <div className="join1-titleBlock">
          {/* (요청) onbording1 에서 받아온 이름을 여기(42번 줄 자리)에 표시 */}
          <p className="join1-kicker">{userName} 님의 소비 데이터를 불러오기 위한 마지막 단계</p>
          <h1 className="join1-title">
            자동으로 지출을 분석하기 위해 카드 또는 계좌를 연결해주세요
          </h1>
        </div>

        <div className="join3-block">
          <p className="join3-label">서비스와 연결할 수단을 선택해주세요</p>
          <p className="join3-helper">카드와 계좌 중 한 가지만 선택할 수 있어요</p>

          <div className="join3-options" role="group" aria-label="연결 수단 선택">
            <button
              type="button"
              className={`join3-option ${method === "card" ? "is-on" : ""}`}
              onClick={() => setMethod((prev) => (prev === "card" ? null : "card"))}
            >
              <span className="join3-optionInner">
                <span className="join3-icon" aria-hidden="true">
                  {/* 카드 아이콘 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 8.5C3 6.567 4.567 5 6.5 5H17.5C19.433 5 21 6.567 21 8.5V15.5C21 17.433 19.433 19 17.5 19H6.5C4.567 19 3 17.433 3 15.5V8.5Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M3 9.2H21"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 14.7H11"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="join3-optionText">카드</span>
              </span>
            </button>

            <button
              type="button"
              className={`join3-option ${method === "account" ? "is-on" : ""}`}
              onClick={() => setMethod((prev) => (prev === "account" ? null : "account"))}
            >
              <span className="join3-optionInner">
                <span className="join3-icon" aria-hidden="true">
                  {/* 계좌(지갑) 아이콘 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5.5 7C4.12 7 3 8.12 3 9.5V16.5C3 17.88 4.12 19 5.5 19H18.5C19.88 19 21 17.88 21 16.5V10.5C21 9.12 19.88 8 18.5 8H6.8C6.25 8 5.73 7.78 5.34 7.39C4.95 7 4.73 6.48 4.73 5.93C4.73 5.38 4.95 4.86 5.34 4.47C5.73 4.08 6.25 3.86 6.8 3.86H17"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 13.2H18.6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="join3-optionText">계좌</span>
              </span>
            </button>
          </div>

          <button
            type="button"
            disabled={!isValid}
            className={`join1-button ${isValid ? "is-enabled" : "is-disabled"}`}
            onClick={() => {
              if (!isValid) return;
              // 다음 화면이 준비되어 있으면 해당 라우트로 변경해도 됨
              navigate("/home", { state: { name: userName, method } });
            }}
          >
            확인
          </button>
        </div>
      </section>

      {/* Bottom Nav */}
      <Navigate />
    </main>
  );
}