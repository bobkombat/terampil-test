import { globalTheme } from 'assets/styles/theme';

export class ButtonProps {
  static checkButtonColor(props) {
    switch (true) {
      case props?.primary:
        return { bgColor: globalTheme.color.primary, fontColor: globalTheme.color.secondary };
      case props?.secondary:
        return { bgColor: globalTheme.color.secondary, fontColor: globalTheme.color.primary };
      case props?.outline:
        return { bgColor: globalTheme.color.transparent, fontColor: globalTheme.color.secondary };
      default:
        return { bgColor: globalTheme.color.primary, fontColor: globalTheme.color.secondary };
    }
  }

  static checkButtonSize(props) {
    switch (true) {
      case props?.large:
        return { width: '230px', height: '60px', fontSize: '20px' };
      case props?.medium:
        return { width: '150px', height: '48px', fontSize: '16px' };
      default:
        return { width: '230px', height: '60px', fontSize: '20px' };
    }
  }

  static checkButtonBorder(props) {
    switch (true) {
      case props?.primary:
        return 'none';
      case props?.secondary:
        return 'solid 1px #00debf';
      case props?.outline:
        return 'solid 1px #000004';
      default:
        return 'none';
    }
  }
}
