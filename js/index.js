var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Q = 'Q',W = 'W',E = 'E',
A = 'A',S = 'S',D = 'D',
Z = 'Z',X = 'X',C = 'C';

var audioPaths = {
  Q: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335238/audio/nipon_cymbal_1.mp3",
  W: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335237/audio/nipon_cymbal_2.mp3",
  E: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335238/audio/taiko_2.mp3",
  A: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335237/audio/med_taiko.mp3",
  S: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335238/audio/taiko_1.mp3",
  D: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335238/audio/big_taiko.mp3",
  Z: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335238/audio/shime_hi.mp3",
  X: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335238/audio/shime_mute.mp3",
  C: "https://res.cloudinary.com/cd0hgkqgk/video/upload/v1538335238/audio/shime_hi_2.mp3" };


var audElements = {};

var soundNames = {
  Q: "nipon_cymbal_1",
  W: "nipon_cymbal_2",
  E: "taiko_2",
  A: "med_taiko",
  S: "taiko_1",
  D: "big_taiko",
  Z: "shime_hi",
  X: "shime_mute",
  C: "shime_hi_2" };


function playSound(audElement) {
  audElement.load();
  var playPromise = audElement.play();
  if (playPromise !== undefined) {
    playPromise.catch(function (error) {
      console.log(error);
    });
  }
}var

DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);
  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));
    _this.state = {
      message: '' };

    _this.triggerDrum = _this.triggerDrum.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }_createClass(DrumMachine, [{ key: 'componentDidMount', value: function componentDidMount()

    {
      document.addEventListener('keydown', this.handleKeyPress);

      audElements = {
        Q: document.getElementById(Q),
        W: document.getElementById(W),
        E: document.getElementById(E),
        A: document.getElementById(A),
        S: document.getElementById(S),
        D: document.getElementById(D),
        Z: document.getElementById(Z),
        X: document.getElementById(X),
        C: document.getElementById(C) };

    } }, { key: 'componentWillUnmount', value: function componentWillUnmount()
    {
      document.removeEventListener('keydown', this.handleKeyPress);
      audElements = {};
    } }, { key: 'triggerDrum', value: function triggerDrum(
    key) {
      playSound(audElements[key]);
      this.setState({
        message: soundNames[key] });

    } }, { key: 'handleClick', value: function handleClick(
    event) {
      this.triggerDrum(event.target.innerText);
    } }, { key: 'handleKeyPress', value: function handleKeyPress(
    event) {
      switch (event.keyCode) {
        case 81: // Q
          this.triggerDrum(Q, event.target.id);
          break;
        case 87: // W
          this.triggerDrum(W);
          break;
        case 69: // E
          this.triggerDrum(E);
          break;
        case 65: // A
          this.triggerDrum(A);
          break;
        case 83: // S
          this.triggerDrum(S);
          break;
        case 68: // D
          this.triggerDrum(D);
          break;
        case 90: // Z
          this.triggerDrum(Z);
          break;
        case 88: // X
          this.triggerDrum(X);
          break;
        case 67: // C
          this.triggerDrum(C);
          break;

        default:
          this.setState({
            message: '' });

          break;}

    } }, { key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement(RenderDisplay, { message: this.state.message }),
          React.createElement(RenderDrumPad, { soundName: soundNames[Q], keyName: Q, onClick: this.handleClick, audSrc: audioPaths[Q] }),
          React.createElement(RenderDrumPad, { soundName: soundNames[W], keyName: W, onClick: this.handleClick, audSrc: audioPaths[W] }),
          React.createElement(RenderDrumPad, { soundName: soundNames[E], keyName: E, onClick: this.handleClick, audSrc: audioPaths[E] }),
          React.createElement(RenderDrumPad, { soundName: soundNames[A], keyName: A, onClick: this.handleClick, audSrc: audioPaths[A] }),
          React.createElement(RenderDrumPad, { soundName: soundNames[S], keyName: S, onClick: this.handleClick, audSrc: audioPaths[S] }),
          React.createElement(RenderDrumPad, { soundName: soundNames[D], keyName: D, onClick: this.handleClick, audSrc: audioPaths[D] }),
          React.createElement(RenderDrumPad, { soundName: soundNames[Z], keyName: Z, onClick: this.handleClick, audSrc: audioPaths[Z] }),
          React.createElement(RenderDrumPad, { soundName: soundNames[X], keyName: X, onClick: this.handleClick, audSrc: audioPaths[X] }),
          React.createElement(RenderDrumPad, { soundName: soundNames[C], keyName: C, onClick: this.handleClick, audSrc: audioPaths[C] })));


    } }]);return DrumMachine;}(React.Component);
;var

RenderDisplay = function (_React$Component2) {_inherits(RenderDisplay, _React$Component2);
  function RenderDisplay(props) {_classCallCheck(this, RenderDisplay);return _possibleConstructorReturn(this, (RenderDisplay.__proto__ || Object.getPrototypeOf(RenderDisplay)).call(this,
    props));
  }_createClass(RenderDisplay, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: 'display' }, this.props.message));

    } }]);return RenderDisplay;}(React.Component);
;var

RenderDrumPad = function (_React$Component3) {_inherits(RenderDrumPad, _React$Component3);
  function RenderDrumPad(props) {_classCallCheck(this, RenderDrumPad);return _possibleConstructorReturn(this, (RenderDrumPad.__proto__ || Object.getPrototypeOf(RenderDrumPad)).call(this,
    props));
  }_createClass(RenderDrumPad, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'drum-pad', id: this.props.soundName, onClick: this.props.onClick },
          this.props.keyName,
          React.createElement('audio', { preload: 'auto', id: this.props.keyName, className: 'clip', src: this.props.audSrc })));


    } }]);return RenderDrumPad;}(React.Component);
;

ReactDOM.render(
React.createElement(DrumMachine, null),
document.getElementById("drum-machine"));