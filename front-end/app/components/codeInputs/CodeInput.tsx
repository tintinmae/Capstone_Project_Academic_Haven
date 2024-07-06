import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

interface CodeInputProps {
  onComplete: (code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ onComplete }) => {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(Array(4).fill(""));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;

    if (value.length === 1 && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    setCode(newCode);

    if (newCode.every((digit) => digit.length === 1)) {
      onComplete(newCode.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex  space-x-2">
      {code.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => {
            inputs.current[index] = el;
          }}
          className="w-12 h-12 text-center text-2xl border rounded"
        />
      ))}
    </div>
  );
};

export default CodeInput;
