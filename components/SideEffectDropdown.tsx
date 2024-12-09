import React, { useState } from "react";
import { useRouter } from "next/router";

const sideEffects = [
  { name: "Headache", path: "/side-effects/headache" },
  { name: "Nausea", path: "/side-effects/nausea" },
  { name: "Drowsiness", path: "/side-effects/drowsiness" },
  // 添加其他副作用
];

const SideEffectDropdown = () => {
  const [selectedEffect, setSelectedEffect] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (selectedEffect) {
      const effect = sideEffects.find((effect) => effect.name === selectedEffect);
      if (effect) router.push(effect.path); // 跳轉到對應的副作用頁面
    }
  };

  return (
    <div>
      <label htmlFor="sideEffect">Select a Side Effect:</label>
      <select
        id="sideEffect"
        value={selectedEffect}
        onChange={(e) => setSelectedEffect(e.target.value)}
      >
        <option value="">-- Select --</option>
        {sideEffects.map((effect) => (
          <option key={effect.name} value={effect.name}>
            {effect.name}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SideEffectDropdown;