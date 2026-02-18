import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./menu.css";

import HomeIcon from "../assets/menu/Home.svg";
import ConsumptionManagementIcon from "../assets/menu/ConsumptionManagement.svg";
import ConsumptionAnalysisIcon from "../assets/menu/ConsumptionAnalysis.svg";
import BudgetGoalIcon from "../assets/menu/BudgetGoal.svg";
import ConsumptionCoachIcon from "../assets/menu/ConsumptionCoach.svg";

const MENU = [
  { key: "home", label: "홈", icon: HomeIcon, to: "/" },
  { key: "consumption-management", label: "소비관리", icon: ConsumptionManagementIcon, to: "/consumption-management" },
  { key: "consumption-analysis", label: "소비분석", icon: ConsumptionAnalysisIcon, to: "/consumption-analysis" },
  { key: "budget-goal", label: "예산목표", icon: BudgetGoalIcon, to: "/budget-goal" },
  { key: "consumption-coach", label: "소비코치", icon: ConsumptionCoachIcon, to: "/consumption-coach" },
];

function guessActiveKey(pathname) {
  if (pathname === "/" || pathname.startsWith("/home")) return "home";
  if (pathname.startsWith("/consumption-management")) return "consumption-management";
  if (pathname.startsWith("/consumption-analysis")) return "consumption-analysis";
  if (pathname.startsWith("/budget-goal")) return "budget-goal";
  if (pathname.startsWith("/consumption-coach")) return "consumption-coach";
  return "consumption-management";
}

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const nameFromState = location?.state?.name;
  const [name, setName] = useState(() => nameFromState ?? localStorage.getItem("joinName") ?? "");

  useEffect(() => {
    if (typeof nameFromState === "string" && nameFromState.trim().length > 0) {
      const trimmed = nameFromState.trim();
      setName(trimmed);
      localStorage.setItem("joinName", trimmed);
    }
  }, [nameFromState]);

  const activeKey = useMemo(() => guessActiveKey(location.pathname), [location.pathname]);

  return (
    <aside className="menu" aria-label="사이드 메뉴">
      <nav className="menu-nav" aria-label="메뉴">
        <ul className="menu-list">
          {MENU.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <li key={item.key} className="menu-itemWrap">
                <button
                  type="button"
                  className={`menu-item ${isActive ? "is-active" : "is-inactive"}`}
                  onClick={() => navigate(item.to)}
                >
                  <img className="menu-icon" src={item.icon} alt="" aria-hidden="true" />
                  <span className="menu-label">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="menu-bottom" aria-label="프로필">
        <div className="menu-profile">
          <div className="menu-avatar" aria-hidden="true" />
          <div className="menu-profileText">
            <p className="menu-name">{(name || "사용자")} 님</p>
          </div>
          <button
            type="button"
            className="menu-settings"
            aria-label="설정"
            onClick={() => navigate("/settings")}
          >
            ⚙︎
          </button>
        </div>
      </div>
    </aside>
  );
}