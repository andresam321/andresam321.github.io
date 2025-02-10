import React, { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const isVisible = useRef(false);
  const buttonRef = useRef(null); // Reference for the button

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldBeVisible = window.pageYOffset > 500;
      if (shouldBeVisible !== isVisible.current) {
        isVisible.current = shouldBeVisible;
        if (buttonRef.current) {
          buttonRef.current.style.display = shouldBeVisible ? "block" : "none";
        }
      }
    };

    // Attach event listener
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      // Cleanup listener when component unmounts
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={buttonRef}
      onClick={scrollToTop}
      className="scroll_up my_totop"
      style={{ display: "none" }} // Initially hidden
    >
      <span className="beny_tm_totop"></span>
    </div>
  );
}
