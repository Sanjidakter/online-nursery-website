import ImageSlider from "./ImageSlider";

const Slider = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/20212116/pexels-photo-20212116/free-photo-of-a-woman-touching-a-plant-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "",
    },
    {
      url: "https://images.pexels.com/photos/10966508/pexels-photo-10966508.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "",
    },
    {
      url: "https://images.pexels.com/photos/4058154/pexels-photo-4058154.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "",
    },
    {
      url: "https://images.pexels.com/photos/22147565/pexels-photo-22147565/free-photo-of-a-man-holding-two-large-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "",
    },
    {
      url: "https://images.pexels.com/photos/22610761/pexels-photo-22610761/free-photo-of-close-up-of-a-person-holding-a-succulent-in-a-pot.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "",
    },
  ];

  const containerStyles: React.CSSProperties = {
    height: "380px",
    margin: "0 auto",
  };

  return (
    <div>
      <div className="w-full sm:w-[100%] md:w-[600px] p-4" style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;
