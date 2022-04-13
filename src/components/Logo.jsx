const Logo = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <img
        src="https://avatars.githubusercontent.com/u/75943412?v=4"
        alt="avatar"
        className="h-10 aspect-square rounded-full"
      />
      <p className="font-bold">
        Mani
        <a
          href="https://www.instagram.com/themanikangkandas/"
          className="text-blue-500">
          kangkan
        </a>
      </p>
    </div>
  );
};

export default Logo;
