/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  Checkbox as HeadlessCheckbox,
  Combobox as HeadlessCombobox,
  Description as HeadlessDescription,
  Dialog as HeadlessDialog,
  DialogBackdrop as HeadlessDialogBackdrop,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
  Disclosure as HeadlessDisclosure,
  DisclosureButton as HeadlessDisclosureButton,
  DisclosurePanel as HeadlessDisclosurePanel,
  Field as HeadlessField,
  Input as HeadlessInput,
  Label as HeadlessLabel,
  Listbox as HeadlessListbox,
  ListboxButton as HeadlessListboxButton,
  ListboxOption as HeadlessListboxOption,
  ListboxOptionProps as HeadlessListboxOptionProps,
  ListboxOptions as HeadlessListboxOptions,
  Menu as HeadlessMenu,
  MenuButton as HeadlessMenuButton,
  MenuItem as HeadlessMenuItem,
  MenuItems as HeadlessMenuItems,
  Popover as HeadlessPopover,
  PopoverButton as HeadlessPopoverButton,
  PopoverPanel as HeadlessPopoverPanel,
  Radio as HeadlessRadio,
  RadioGroup as HeadlessRadioGroup,
  Switch as HeadlessSwitch,
  Tab as HeadlessTab,
  TabList as HeadlessTabList,
  TabPanel as HeadlessTabPanel,
  TabPanels as HeadlessTabPanels,
  TabProps as HeadlessTabProps,
} from "@headlessui/react";
import { JSXElementConstructor } from "react";
type ReactTag = keyof React.JSX.IntrinsicElements | JSXElementConstructor<any>;
export type ClickEvent<T = HTMLDivElement> = React.MouseEvent<T, MouseEvent>;
export interface ICommonComponentProps {
  disabled?: boolean;
  readonly?: boolean;
}

export interface ICheckbox
  extends React.ComponentProps<typeof HeadlessCheckbox>,
    ICommonComponentProps {}

export interface IInputProps
  extends React.ComponentProps<typeof HeadlessInput>,
    ICommonComponentProps {}

export interface IDescriptionProps
  extends React.ComponentProps<typeof HeadlessDescription>,
    ICommonComponentProps {}

export interface IFieldProps
  extends React.ComponentProps<typeof HeadlessField>,
    ICommonComponentProps {}

export interface ILabelProps
  extends React.ComponentProps<typeof HeadlessLabel>,
    ICommonComponentProps {}

export interface IComboboxProps
  extends React.ComponentProps<typeof HeadlessCombobox>,
    ICommonComponentProps {}

export interface IDialogProps
  extends React.ComponentProps<typeof HeadlessDialog>,
    ICommonComponentProps {}
export interface IDialogBackdropProps
  extends React.ComponentProps<typeof HeadlessDialogBackdrop>,
    ICommonComponentProps {}
export interface IDialogPanelProps
  extends React.ComponentProps<typeof HeadlessDialogPanel>,
    ICommonComponentProps {}
export interface IDialogTitleProps
  extends React.ComponentProps<typeof HeadlessDialogTitle>,
    ICommonComponentProps {}
export interface IDisclosureButtonProps
  extends React.ComponentProps<typeof HeadlessDisclosureButton>,
    ICommonComponentProps {}

export interface IDisclosurePanelProps
  extends React.ComponentProps<typeof HeadlessDisclosurePanel>,
    ICommonComponentProps {}

export interface IDisclosureProps
  extends React.ComponentProps<typeof HeadlessDisclosure>,
    ICommonComponentProps {}

export interface IListboxButtonProps
  extends React.ComponentProps<typeof HeadlessListboxButton>,
    ICommonComponentProps {}

export interface IListboxOptionProps<TValue = any>
  extends HeadlessListboxOptionProps<any, TValue>,
    ICommonComponentProps {}

export interface IListboxOptionsProps
  extends React.ComponentProps<typeof HeadlessListboxOptions>,
    ICommonComponentProps {}

export interface IListboxProps<T>
  extends React.ComponentProps<typeof HeadlessListbox<ReactTag, T, T>>,
    ICommonComponentProps {
  value: T;
  onChange?: (v: T) => void;
  defaultValue?: T;
}

export interface IMenuButtonProps
  extends React.ComponentProps<typeof HeadlessMenuButton>,
    ICommonComponentProps {}

export interface IMenuItemProps
  extends React.ComponentProps<typeof HeadlessMenuItem>,
    ICommonComponentProps {}

export interface IMenuItemsProps
  extends React.ComponentProps<typeof HeadlessMenuItems>,
    ICommonComponentProps {}

export interface IMenuProps
  extends React.ComponentProps<typeof HeadlessMenu<ReactTag>>,
    ICommonComponentProps {}
export interface IPopoverButtonProps
  extends React.ComponentProps<typeof HeadlessPopoverButton>,
    ICommonComponentProps {}

export interface IPopoverPanelProps
  extends React.ComponentProps<typeof HeadlessPopoverPanel>,
    ICommonComponentProps {}

export interface IPopoverProps
  extends React.ComponentProps<typeof HeadlessPopover>,
    ICommonComponentProps {}

export interface IRadioGroupProps
  extends React.ComponentProps<typeof HeadlessRadioGroup>,
    ICommonComponentProps {}

export interface IRadioProps
  extends React.ComponentProps<typeof HeadlessRadio>,
    ICommonComponentProps {}

export interface ISwitchProps
  extends React.ComponentProps<typeof HeadlessSwitch>,
    ICommonComponentProps {}

export interface ITabListProps
  extends React.ComponentProps<typeof HeadlessTabList>,
    ICommonComponentProps {}

export interface ITabPanelProps
  extends React.ComponentProps<typeof HeadlessTabPanel>,
    ICommonComponentProps {}

export interface ITabPanelsProps
  extends React.ComponentProps<typeof HeadlessTabPanels>,
    ICommonComponentProps {}

export interface ITabProps extends HeadlessTabProps, ICommonComponentProps {}

export const Checkbox: React.FC<ICheckbox> = (props) => {
  return props.children ? (
    <HeadlessCheckbox {...props}>{props.children}</HeadlessCheckbox>
  ) : (
    <HeadlessCheckbox {...props} />
  );
};

export const Combobox: React.FC<IComboboxProps> = (props) => {
  return props.children ? (
    <HeadlessCombobox {...props}>{props.children}</HeadlessCombobox>
  ) : (
    <HeadlessCombobox {...props} />
  );
};

export const Dialog: React.FC<IDialogProps> = (props) => {
  return props.children ? (
    <HeadlessDialog {...props}>{props.children}</HeadlessDialog>
  ) : (
    <HeadlessDialog {...props} />
  );
};

export const DialogBackdrop: React.FC<IDialogBackdropProps> = (props) => {
  return props.children ? (
    <HeadlessDialogBackdrop {...props}>{props.children}</HeadlessDialogBackdrop>
  ) : (
    <HeadlessDialogBackdrop {...props} />
  );
};
export const DialogPanel: React.FC<IDialogPanelProps> = (props) => {
  return props.children ? (
    <HeadlessDialogPanel {...props}>{props.children}</HeadlessDialogPanel>
  ) : (
    <HeadlessDialogPanel {...props} />
  );
};
export const DialogTitle: React.FC<IDialogTitleProps> = (props) => {
  return props.children ? (
    <HeadlessDialogTitle {...props}>{props.children}</HeadlessDialogTitle>
  ) : (
    <HeadlessDialogTitle {...props} />
  );
};

export const Listbox = <T,>(props: IListboxProps<T>) => {
  return props.children ? (
    <HeadlessListbox {...props}>{props.children}</HeadlessListbox>
  ) : (
    <HeadlessListbox {...props} />
  );
};
// export const Listbox = (props: IListboxProps) => {
//   return props.children ? (
//     <HeadlessListbox {...props}>{props.children}</HeadlessListbox>
//   ) : (
//     <HeadlessListbox {...props} />
//   );
// };

export const ListboxButton: React.FC<IListboxButtonProps> = (props) => {
  return props.children ? (
    <HeadlessListboxButton {...props}>{props.children}</HeadlessListboxButton>
  ) : (
    <HeadlessListboxButton {...props} />
  );
};

export const ListboxOptions: React.FC<IListboxOptionsProps> = (props) => {
  return props.children ? (
    <HeadlessListboxOptions {...props}>{props.children}</HeadlessListboxOptions>
  ) : (
    <HeadlessListboxOptions {...props} />
  );
};
export const ListboxOption: React.FC<IListboxOptionProps> = (props) => {
  return props.children ? (
    <HeadlessListboxOption {...props}>{props.children}</HeadlessListboxOption>
  ) : (
    <HeadlessListboxOption {...props} />
  );
};

export const Menu: React.FC<IMenuProps> = (props) => {
  return props.children ? (
    <HeadlessMenu {...props}>{props.children}</HeadlessMenu>
  ) : (
    <HeadlessMenu {...props} />
  );
};

export const MenuButton: React.FC<IMenuButtonProps> = (props) => {
  return props.children ? (
    <HeadlessMenuButton {...props}>{props.children}</HeadlessMenuButton>
  ) : (
    <HeadlessMenuButton {...props} />
  );
};

export const MenuItem: React.FC<IMenuItemProps> = (props) => {
  return props.children ? (
    <HeadlessMenuItem {...props}>{props.children}</HeadlessMenuItem>
  ) : (
    <HeadlessMenuItem {...props} />
  );
};

export const MenuItems: React.FC<IMenuItemsProps> = (props) => {
  return props.children ? (
    <HeadlessMenuItems {...props}>{props.children}</HeadlessMenuItems>
  ) : (
    <HeadlessMenuItems {...props} />
  );
};

export const Popover: React.FC<IPopoverProps> = (props) => {
  return props.children ? (
    <HeadlessPopover {...props}>{props.children}</HeadlessPopover>
  ) : (
    <HeadlessPopover {...props} />
  );
};

export const PopoverButton: React.FC<IPopoverButtonProps> = (props) => {
  return props.children ? (
    <HeadlessPopoverButton {...props}>{props.children}</HeadlessPopoverButton>
  ) : (
    <HeadlessPopoverButton {...props} />
  );
};

export const PopoverPanel: React.FC<IPopoverPanelProps> = (props) => {
  return props.children ? (
    <HeadlessPopoverPanel {...props}>{props.children}</HeadlessPopoverPanel>
  ) : (
    <HeadlessPopoverPanel {...props} />
  );
};

export const Switch: React.FC<ISwitchProps> = (props) => {
  return props.children ? (
    <HeadlessSwitch {...props}>{props.children}</HeadlessSwitch>
  ) : (
    <HeadlessSwitch {...props} />
  );
};

export const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  return props.children ? (
    <HeadlessRadioGroup {...props}>{props.children}</HeadlessRadioGroup>
  ) : (
    <HeadlessRadioGroup {...props} />
  );
};

export const RadioGroupOption: React.FC<IRadioProps> = (props) => {
  return props.children ? (
    <HeadlessRadio {...props}>{props.children}</HeadlessRadio>
  ) : (
    <HeadlessRadio {...props} />
  );
};

export const Tab: React.FC<ITabProps> = (props) => {
  return props.children ? (
    <HeadlessTab {...props}>{props.children}</HeadlessTab>
  ) : (
    <HeadlessTab {...props} />
  );
};

export const TabList: React.FC<ITabListProps> = (props) => {
  return props.children ? (
    <HeadlessTabList {...props}>{props.children}</HeadlessTabList>
  ) : (
    <HeadlessTabList {...props} />
  );
};

export const TabPanel: React.FC<ITabPanelProps> = (props) => {
  return props.children ? (
    <HeadlessTabPanel {...props}>{props.children}</HeadlessTabPanel>
  ) : (
    <HeadlessTabPanel {...props} />
  );
};

export const TabPanels: React.FC<ITabPanelsProps> = (props) => {
  return props.children ? (
    <HeadlessTabPanels {...props}>{props.children}</HeadlessTabPanels>
  ) : (
    <HeadlessTabPanels {...props} />
  );
};

export const Disclosure: React.FC<IDisclosureProps> = (props) => {
  return props.children ? (
    <HeadlessDisclosure {...props}>{props.children}</HeadlessDisclosure>
  ) : (
    <HeadlessDisclosure {...props} />
  );
};

export const DisclosureButton: React.FC<IDisclosureButtonProps> = (props) => {
  return props.children ? (
    <HeadlessDisclosureButton {...props}>
      {props.children}
    </HeadlessDisclosureButton>
  ) : (
    <HeadlessDisclosureButton {...props} />
  );
};

export const DisclosurePanel: React.FC<IDisclosurePanelProps> = (props) => {
  return props.children ? (
    <HeadlessDisclosurePanel {...props}>
      {props.children}
    </HeadlessDisclosurePanel>
  ) : (
    <HeadlessDisclosurePanel {...props} />
  );
};

export const Input: React.FC<IInputProps> = (props) => {
  return props.children ? (
    <HeadlessInput {...props}>{props.children}</HeadlessInput>
  ) : (
    <HeadlessInput {...props} />
  );
};
export const Description: React.FC<IDescriptionProps> = (props) => {
  return props.children ? (
    <HeadlessDescription {...props}>{props.children}</HeadlessDescription>
  ) : (
    <HeadlessDescription {...props} />
  );
};
export const Field: React.FC<IFieldProps> = (props) => {
  return props.children ? (
    <HeadlessField {...props}>{props.children}</HeadlessField>
  ) : (
    <HeadlessField {...props} />
  );
};
export const Label: React.FC<ILabelProps> = (props) => {
  return props.children ? (
    <HeadlessLabel {...props}>{props.children}</HeadlessLabel>
  ) : (
    <HeadlessLabel {...props} />
  );
};
