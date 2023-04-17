const Container: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const { children } = props;
  return (
    <div className="mx-4 sm:mx-8 md:mx-28 lg:mx-38 xl:mx-44 2xl:mx-48">
      {children}
    </div>
  );
};

export default Container;
