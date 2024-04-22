"use client";
// import { useEffect, useRef } from "react";
//
// export default function MdxFileRenderer({ code }) {
//   const rootRef = useRef(null);
//   useEffect(() => {
//     const allPres = rootRef.current.querySelectorAll("pre");
//
//     for (const pre of allPres) {
//       const code = pre.firstElementChild;
//       pre.appendChild(createCopyButton(code));
//       const cls = pre.querySelector("code").className;
//       if (cls) {
//         pre.classList.add(cls);
//       }
//       if (!code || !/code/i.test(code.tagName)) {
//         continue;
//       }
//     }
//
//     return;
//   });
//
//   return (
//     <div
//       ref={rootRef}
//       className="blog-details"
//       dangerouslySetInnerHTML={{ __html: code }}
//     ></div>
//   );
// }
//
// function createCopyButton(codeEl) {
//   const button = document.createElement("button");
//   button.classList.add("prism-copy-button");
//   button.textContent = "Copy";
//
//   button.addEventListener("click", () => {
//     if (button.textContent === "Copied") {
//       return;
//     }
//     navigator.clipboard.writeText(codeEl.textContent || "");
//     button.textContent = "Copied";
//     button.disabled = true;
//     setTimeout(() => {
//       button.textContent = "Copy";
//       button.disabled = false;
//     }, 3000);
//   });
//
//   return button;
// }

"use client";
import { useEffect, useRef } from "react";

export default function MdxFileRenderer({ code }) {
  const rootRef = useRef(null);
  useEffect(() => {
    const allPres = rootRef.current.querySelectorAll("pre");

    for (const pre of allPres) {
      const code = pre.firstElementChild;
      pre.appendChild(createCopyButton(code));
      const cls = pre.querySelector("code").className;
      if (cls) {
        pre.classList.add(cls);
      }
      if (!code || !/code/i.test(code.tagName)) {
        continue;
      }
    }

    return;
  });

  return (
    <div
      ref={rootRef}
      className="blog-details"
      dangerouslySetInnerHTML={{ __html: code }}
    ></div>
  );
}

function createCopyButton(codeEl) {
  const button = document.createElement("button");
  button.classList.add("prism-copy-button");
  button.textContent = "Copy";

  button.addEventListener("click", () => {
    if (button.textContent === "Copied") {
      return;
    }
    navigator.clipboard.writeText(codeEl.textContent || "");
    button.textContent = "Copied";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "Copy";
      button.disabled = false;
    }, 3000);
  });

  return button;
}
