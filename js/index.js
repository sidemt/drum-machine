var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var audQ = document.getElementById("Q");
var audW = document.getElementById("W");
var audE = document.getElementById("E");
var audA = document.getElementById("A");
var audS = document.getElementById("S");
var audD = document.getElementById("D");
var audZ = document.getElementById("Z");
var audX = document.getElementById("X");
var audC = document.getElementById("C");

function playQ() {
  audQ.play();
}
function playW() {
  audW.play();
}
function playE() {
  audE.play();
}
function playA() {
  audA.play();
}
function playS() {
  audS.play();
}
function playD() {
  audD.play();
}
function playZ() {
  audZ.play();
}
function playX() {
  audX.play();
}
function playC() {
  audC.play();
}var

DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
    _this.state = {
      message: '' };

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);return _this;
  }_createClass(DrumMachine, [{ key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener('keydown', this.handleKeyPress);
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()
    {
      document.removeEventListener('keydown', this.handleKeyPress);
    } }, { key: "handleKeyPress", value: function handleKeyPress(
    event) {
      switch (event.keyCode) {
        case 81: // Q
          playQ();
          this.setState({
            message: 'Q Key Pressed' });

          break;
        case 87: // W
          playW();
          this.setState({
            message: 'W Key Pressed' });

          break;
        case 69: // E
          playE();
          this.setState({
            message: 'E Key Pressed' });

          break;

        case 65: // A
          playA();
          this.setState({
            message: 'A Key Pressed' });

          break;
        case 83: // S
          playS();
          this.setState({
            message: 'S Key Pressed' });

          break;
        case 68: // D
          playD();
          this.setState({
            message: 'D Key Pressed' });

          break;

        case 90: // Z
          playZ();
          this.setState({
            message: 'Z Key Pressed' });

          break;
        case 88: // X
          playX();
          this.setState({
            message: 'X Key Pressed' });

          break;
        case 67: // C
          playC();
          this.setState({
            message: 'C Key Pressed' });

          break;

        default:
          this.setState({
            message: '' });

          break;}

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "display" }, this.state.message));

    } }]);return DrumMachine;}(React.Component);
;

ReactDOM.render(
React.createElement(DrumMachine, null),
document.getElementById("sound-name"));