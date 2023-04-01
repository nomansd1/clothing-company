const columns = [
  { label: "S.N.O", type: "name" },
  { label: "Employee name", type: "name" },
  { label: "Products", type: "slider" },
  { label: "Budget", type: "name" },
  { label: "More Products", type: "action" },
  { label: "Add Items", type: "action" },
];

let sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
}

export const tableStructureData = {
  columns,
  sliderSettings
};

