"use client";

import React, { useState, useEffect, useRef } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input, Select, SelectItem } from "@nextui-org/react";

const options = [
    { value: "Stock Video" },
    { value: "Video Templates" },
    { value: "Music" },
    { value: "Sound Effects" },
    { value: "Graphic Templates" },
    { value: "Graphics" },
    { value: "Presentation Templates" },
    { value: "Photos" },
    { value: "Fonts" },
    { value: "Add-ons" },
    { value: "Web Templates" },
    { value: "CMS Templates" },
    { value: "WordPress" },
    { value: "3D" },
    { value: "Free Files" },
    { value: "Extensions" },
    { value: "Popular Searches" }
];

const SubNavbar = () => {
    const [screen, setScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreen(window.innerWidth);
            console.log(screen);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <div className="hidden lg:flex gap-x-5 text-sm px-[30px] bg-[rgb(220,220,220,0.1)] shadow-sm border-b-1 overflow-clip content-center align-middle items-center justify-center">
                {
                    options.map((option) => {
                        const calculatedWidth = option.value.length * 5;
                        return(
                            <div className={`w-[${calculatedWidth}px] hover:border-b-3 py-5 hover:scale-[90%] border-blue-500 duration-150 ease-in `}> <a href="#"> {option.value} </a></div>
                        );
                    })
                }
            </div>

            <div className="flex flex-col gap-5 lg:hidden w-full p-20 content-center align-middle items-center justify-center text-black">
                <Select
                    // label=""
                    placeholder="Select an animal"
                    defaultSelectedKeys={["Stock Video"]}
                    className="max-w-lg"
                    variant="underlined"
                >
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.value}
                        </SelectItem>
                    ))}
                </Select>

                <Input
                    type="text"
                    label="Search"
                    className="max-w-lg"
                />
            </div>

        </div>
    );
};

export default SubNavbar;
