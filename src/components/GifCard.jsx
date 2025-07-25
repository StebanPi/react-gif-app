const GifCard = ({ title, url }) => {
  console.log(title, url);
  return (
    <div className="content-center items-center bg-white rounded-[10px] shadow-sm flex flex-col h-fit justify-center mb-5 mr-5 overflow-hidden">
      <img className="w-full" src={url} alt={title} />
      <p className="bg-white flex-1 text-2xl mt-[5px] pt-[5px] px-5 pb-0 text-center">
        {title}
      </p>
    </div>
  );
};

export default GifCard;
