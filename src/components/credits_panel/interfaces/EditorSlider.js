// React
import { useEffect } from "react";
// Redux
import { useSelector } from "react-redux";

const EditorSlider = ({ children }) => {
  const openSlider = useSelector((state) => state.credits.openSlider);

  // SLIDER STYLING
  useEffect(() => {
    const slider = document.querySelector(".editor-slider");

    if (openSlider) {
      openSlider.add || openSlider.edit
        ? (slider.style.transform = "translateY(0px)")
        : openSlider.log
        ? (slider.style.transform = "translateY(-181px)")
        : (slider.style.transform = "translateY(220px)");
    }
  }, [openSlider]);

  return (
    <div data-testid="slider" className="editor-slider">
      {children}
    </div>
  );
};

export default EditorSlider;
