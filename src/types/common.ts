export type Attribute = {
  fieldName: string;
  translations: {
    pl: string;
    en: string;
  };
  ControlComponent: React.ComponentType<any>;
  controlComponentProps?: Record<string, any>;
}

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}
