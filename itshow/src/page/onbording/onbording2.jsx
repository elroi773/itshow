import React, { useMemo, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "./onbording2.css";
import Check from "../../component/check";
import Navigate from "../../component/navigate";

const GOALS = [
  {
    key: "impulse",
    title: "충동 구매 줄이기",
    desc: "필요한 것만 사고, 즉흥 구매는 줄일래요",
  },
  {
    key: "fix",
    title: "소소한 지출 관리",
    desc: "배달/커피 등 작은 지출을 줄이고 싶어요",
  },
  {
    key: "habit",
    title: "습관 개선하기",
    desc: "소비 습관을 천천히 바꿔보고 싶어요",
  },
  {
    key: "plan",
    title: "계획적인 소비",
    desc: "소비 기준을 정해두고 지킬래요",
  },
  {
    key: "track",
    title: "소비 점검하기",
    desc: "무엇에 쓰는지 먼저 파악하고 싶어요",
  },
  {
    key: "safe",
    title: "건전한 소비하기",
    desc: "불필요한 지출을 줄이고 싶어요",
  },
  {
    key: "goal",
    title: "목적 있는 소비하기",
    desc: "목표를 세우고 소비 습관을 만들고 싶어요",
  },
];

const CHIPS = {
  pay: ["월급", "용돈", "알바 수입"],
  term: ["일주일", "한달", "3일 · 7일"],
  salary: ["월급 전", "월급 전 · 후", "월급 직후", "월초 · 월말"],
  category: [
    "식비",
    "카페·간식",
    "의식·생활",
    "교통",
    "통신·구독",
    "주거·공과금",
    "의류·미용",
    "의료·건강",
    "문화·여가",
    "선물·경조",
    "교육·자기계발",
    "여행·숙박",
    "쇼핑",
  ],
};

export default function OnBording2() {
  const location = useLocation();
  const navigate = useNavigate();
  const routeName = location?.state?.name;
  const storedName = typeof window !== "undefined" ? localStorage.getItem("joinName") : "";
  const userName = (routeName || storedName || "회원").trim();

  const [selectedGoal, setSelectedGoal] = useState(null);
  // 기준 선택(월 별/단기 기간/급여)은 기본 선택값 없이 시작(사용자가 직접 선택)
  const [payType, setPayType] = useState(null);
  const [term, setTerm] = useState(null);
  const [salary, setSalary] = useState(null);
  const [selectedCats, setSelectedCats] = useState([]);
  const [amount, setAmount] = useState("");

  const amountNumber = useMemo(() => {
    const n = Number(String(amount).replace(/[^0-9]/g, ""));
    return Number.isFinite(n) ? n : 0;
  }, [amount]);

  const isValid = useMemo(() => {
    return Boolean(selectedGoal) && amountNumber > 0;
  }, [selectedGoal, amountNumber]);

  const toggleCat = (c) => {
    setSelectedCats((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  };

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
      <section className="join1-card join2-card" aria-label="회원가입 2단계">
        <div className="join1-progressRow">
          <span className="join1-progressNow">02</span>
          <span className="join1-progressSlash">/</span>
          <span className="join1-progressTotal">03</span>
        </div>

        <div className="join1-titleBlock">
          <p className="join1-kicker">{userName} 님의 소비관리를 위한 두 번째 단계</p>
          <h1 className="join1-title">어떤 목표를 설정해 볼까요?</h1>
        </div>

        {/* Goal Select */}
        <div className="join2-block">
          <p className="join2-subtitle">만들고 싶은 목표를 선택해 주세요</p>
          <p className="join2-subhelp">복수 선택이 아닌 하나만 선택할 수 있어요</p>

          <div className="goalGrid" role="list">
            {GOALS.map((g) => (
              <div key={g.key} role="listitem">
                <Check
                  title={g.title}
                  description={g.desc}
                  selected={selectedGoal === g.key}
                  onClick={() => setSelectedGoal(g.key)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 기준 선택 */}
        <div className="join2-block">
          <p className="join2-subtitle">소비 목표의 필요한 기준을 선택해 주세요</p>
          <p className="join2-subhelp">선택 값은 이후 추천 및 분석에 반영될 수 있어요</p>

          <div className="field">
            <div className="fieldLabel">월 별</div>
            <div className="chipRow">
              {CHIPS.pay.map((x) => (
                <button
                  key={x}
                  type="button"
                  className={`chip ${payType === x ? "is-on" : ""}`}
                  onClick={() => setPayType(x)}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <div className="fieldLabel">단기 기간</div>
            <div className="chipRow">
              {CHIPS.term.map((x) => (
                <button
                  key={x}
                  type="button"
                  className={`chip ${term === x ? "is-on" : ""}`}
                  onClick={() => setTerm(x)}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <div className="fieldLabel">급여</div>
            <div className="chipRow">
              {CHIPS.salary.map((x) => (
                <button
                  key={x}
                  type="button"
                  className={`chip ${salary === x ? "is-on" : ""}`}
                  onClick={() => setSalary(x)}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>

          <div className="field">
            <div className="fieldLabel">소비 목표와 관련된 카테고리를 선택해 주세요</div>
            <p className="join2-subhelp">최대 5개까지 선택할 수 있어요</p>
            <div className="chipRow chipWrap">
              {CHIPS.category.map((x) => {
                const on = selectedCats.includes(x);
                const disabled = !on && selectedCats.length >= 5;
                return (
                  <button
                    key={x}
                    type="button"
                    className={`chip ${on ? "is-on" : ""} ${disabled ? "is-disabled" : ""}`}
                    onClick={() => {
                      if (disabled) return;
                      toggleCat(x);
                    }}
                    disabled={disabled}
                  >
                    {x}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Amount */}
        <div className="join2-block">
          <p className="join2-subtitle">{userName} 님의 소비 목표를 위한 금액을 입력해 주세요</p>
          <input
            className="join2-amount"
            inputMode="numeric"
            placeholder="예) 100,000"
            value={amount}
            onChange={(e) => {
              const v = e.target.value;
              // 숫자만 남기고(콤마 포함 모든 문자 제거) 천 단위 콤마 포맷
              const digits = v.replace(/[^0-9]/g, "");
              if (digits === "") {
                setAmount("");
                return;
              }
              const n = Number(digits);
              setAmount(Number.isFinite(n) ? n.toLocaleString() : "");
            }}
          />
          <p className="join2-footnote">위 항목은 선택 항목이에요</p>
          <ul className="join2-footnoteList">
            <li>생활비·지출·예산 등의 편한 기준으로 적어도 괜찮아요</li>
            <li>최소/최대 금액 작성에는 제한이 없어요</li>
          </ul>
        </div>

        <button
          type="button"
          disabled={!isValid}
          className={`join1-button ${isValid ? "is-enabled" : "is-disabled"}`}
          onClick={() => {
            if (!isValid) return;
            navigate("/onbording3", {
              state: {
                name: userName,
                selectedGoal,
                payType,
                term,
                salary,
                selectedCats,
                amount: amountNumber,
              },
            });
          }}
        >
          확인
        </button>
      </section>

      {/* Bottom Nav */}
      <Navigate />
    </main>
  );
}