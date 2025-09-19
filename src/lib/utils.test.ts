/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("p-2", "text-sm", undefined, false && "hidden")).toBe(
      "p-2 text-sm",
    );
  });

  it("dedupes conflicting Tailwind classes (tailwind-merge)", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
  });
});

