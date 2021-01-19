class LinkProps {
  static checkColor(props) {
    switch (true) {
      case props?.primary:
        return '#fdfdfd';
      case props?.secondary:
        return '#c4c4c4';
      default:
        return '#fdfdfd';
    }
  }
}

export default LinkProps;
