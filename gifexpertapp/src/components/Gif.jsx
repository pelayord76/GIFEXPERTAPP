export const Gif = ({ imagen }) => {
  return (
    <>
      <div key={imagen.id}>
        <p>{imagen.titulo}</p>
        <img src={imagen.url} />
      </div>
    </>
  );
};
