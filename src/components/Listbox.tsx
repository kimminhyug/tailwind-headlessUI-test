import {
  faCaretDown,
  faClose,
  faListCheck,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  ClickEvent,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "./base/Headless-ui-wrapper";
import { DropdownCheckBox } from "./Checkbox";

type item = { id: string | number; name: string };
const minMaxSize = "max-w-[360px] min-w-[360px] w-[360px]";

export const ChipListbox = ({ items }: { items: item[] }) => {
  //   const { toggle, value: toggleAllSelect } = useBoolean(false);
  const [toggleAllSelect, setToggleAllSelect] = useState<boolean | null>(null);
  const toggle = () => setToggleAllSelect((prev) => !prev);
  const [options] = useState([...items]);
  const [selectedPeople, setSelectedPeople] = useState([items[0], items[1]]);
  useEffect(() => {
    console.log(toggleAllSelect);
    // 최초 실행 방지
    if (toggleAllSelect === null) {
      return;
    }

    if (toggleAllSelect) {
      setSelectedPeople(options);
    } else {
      setSelectedPeople([]);
    }
  }, [toggleAllSelect]);

  const handleChange = (list: item[]) => {
    setSelectedPeople(list);
  };
  const handleClickClose = (
    e: ClickEvent<SVGSVGElement>,
    id: number | string
  ) => {
    e.preventDefault();
    setSelectedPeople((itemList) => itemList.filter((item) => item.id !== id));
  };

  const selectedIds = new Set(selectedPeople.map((p) => p.id));

  const handleClickAllSelect = (e: ClickEvent) => {
    e.preventDefault();
    toggle();
  };
  return (
    <Listbox
      value={selectedPeople}
      onChange={handleChange}
      as={React.Fragment}
      multiple={true}
    >
      <div className={twMerge("relative", minMaxSize)}>
        <ListboxButton
          className={twMerge(
            "bg-dropdown-background border-1 border-dropdown-border-color rounded-5 inline-flex  w-full   px-5 py-2.5 h-fit  max-h-32  cursor-pointer overflow-y-scroll"
          )}
        >
          <div className="flex flex-wrap gap-0.75 text-nowrap cursor-pointer">
            {selectedPeople.map((person) => {
              return (
                <GrayBadge key={person.id}>
                  {person.name}
                  <FontAwesomeIcon
                    className="ml-1 cursor-pointer hover:outline-1"
                    icon={faClose}
                    onClick={(e) => handleClickClose(e, person.id)}
                  />
                </GrayBadge>
              );
            })}
          </div>
          <FontAwesomeIcon className="relative ml-auto" icon={faCaretDown} />
        </ListboxButton>
        <ListboxOptions
          //   anchor="bottom"
          portal={false}
          className={twMerge(
            "absolute mt-1 border-1 border-dropdown-border-color rounded-5 w-full bg-white max-h-[180px] overflow-auto  ",
            minMaxSize
          )}
        >
          <ListboxOption
            key={"all"}
            value={"all"}
            className="block content-center pr-4 h-9 px-5 hover:bg-dropdown-item-hover-background cursor-pointer"
            onClick={handleClickAllSelect}
          >
            {toggleAllSelect && selectedPeople.length >= 1 ? (
              <>
                <FontAwesomeIcon icon={faListUl} /> 전체 해제
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faListCheck} /> 전체 선택
              </>
            )}
          </ListboxOption>

          {options.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="block items-center data-[focus]:bg-dropdown-item-hover-background flex items-center pr-4 h-9 px-5"
            >
              <DropdownCheckBox
                checked={selectedIds.has(person.id)}
                disabled={false}
              >
                <>{person.name}</>
              </DropdownCheckBox>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

// selectedPeople.find(
//     (selectedItem) => selectedItem.id === person.id
//   ) as boolean

const GrayBadge = ({
  children,
  onClick = () => null,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <span
      onClick={onClick}
      className="inline-flex items-center rounded-md bg-[#EEF0F5] px-2  py-0.5 text-sm font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset rounded-10 "
    >
      {children}
    </span>
  );
};
