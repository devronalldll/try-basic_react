import PropTypes from "prop-types";

export function Button({ text, name = "defaultName", ready = false }) {
  return (
    <div>
      <button>
        {text} - {name}
      </button>
      <br />
      <span
      style={ready?{background:"green",padding:"10px",borderRadius:"10px"}:{background:"red",padding:"10px",borderRadius:"10px"}}
      >{ready ? "Ready" : "Not Ready"}</span>
    </div>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
