type ButtonType1Prop = {
  text: string;
  ringColor: string;
};

export const ButtonType1 = ({ text, ringColor }: ButtonType1Prop) => {
  return (
    <button
      className={`px-4 mr-2 py-2 bg-[#373A41] hover:bg-[#5E626E] ring-[0.5px] rounded-lg ring-${ringColor}-300 mb-2`}
    >
      {text}
    </button>
  );
};
