const FunctionalInputSearch =(props) => {
    const { classname, type, placeholder, onChangeHandler } = props;
    return (
      <div>
        <input
          classname={classname}
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }

export default FunctionalInputSearch;
