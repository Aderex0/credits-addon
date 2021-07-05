// React
import { useEffect } from "react";
import { useSelector } from "react-redux";
//

const EditorSlider = ({ children }) => {
  const openSlider = useSelector((state) => state.companies.openSlider);

  // SLIDER STYLING
  useEffect(() => {
    const slider = document.querySelector(".editor-slider");

    if (openSlider) {
      openSlider.add || openSlider.edit
        ? (slider.style.transform = "translateY(0px)")
        : (slider.style.transform = "translateY(220px)");
    }
  }, [openSlider]);

  return <div className="editor-slider">{children}</div>;
};

export default EditorSlider;
