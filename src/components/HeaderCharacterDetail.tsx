function HeaderCharacterDetail(props: any) {
    const {name, image} = props.character;

    return (
        <div className="flex flex-col items-center">
        <img
          className="rounded-full w-40 h-40 mb-5 shadow-xl border-2 border-green-400"
          src={image}
          alt={name}
        />
        <h1 className="mb-5 text-4xl font-bold">{name}</h1>
      </div>
    );
}

export default HeaderCharacterDetail;