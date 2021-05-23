type imgType = {
  address: string;
  description: string;
};

const Photo = (img: imgType) => {
  const { address, description } = img;
  return (
    <>
      <section>
        <img src={address} />
      </section>

      <article>
        <code>{description}</code>
      </article>
    </>
  );
};

export default Photo;
