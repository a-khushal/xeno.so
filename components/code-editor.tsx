"use client";

import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx.min.js";

const initialCode = `
import React from "react";

type Props = {
  name: string;
};

export const Greeting: React.FC<Props> = ({ name }) => (
  <h1>Hello, {name}!</h1>
);
`.trim();

export default function EditablePrismBlock() {
  const [code, setCode] = useState(initialCode);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      Prism.highlightElement(divRef.current);
    }
  }, [code]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setCode(e.currentTarget.innerText);
  };

  return (
    <div
      className="w-full flex justify-center items-center my-8"
      style={{ minHeight: 300 }}
    >
      <div
        ref={divRef}
        className="language-jsx rounded-lg p-4 font-mono text-base outline-none bg-[#2d2d2d] text-green-100 border resize-y"
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        onInput={handleInput}
        style={{
          whiteSpace: "pre",
          overflow: "auto",
          minWidth: 500,
          minHeight: 140,
        }}
        tabIndex={0}
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(code, Prism.languages.jsx, "jsx"),
        }}
      />
    </div>
  );
}