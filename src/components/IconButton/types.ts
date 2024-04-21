export type IconButtonProps = {
  Icon: React.ComponentType<Record<string, any>>;
  label: string;
  action: () => void;
}
