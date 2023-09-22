import { Component } from "react";

class InputSearch extends Component {
  render() {
    const { classname, type, placeholder, onChangeHandler } = this.props;
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
}

export default InputSearch;
