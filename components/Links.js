import React from "react";
import Link from "next/link";

const Links = (props) => {
  return (
    <ul className="list-reset lg:flex justify-end flex-1 items-center">
      <li className="mr-3">
        <Link
          href={props.dir}
          className="inline-block py-2 px-4 text-black font-bold no-underline"
        >
          {props.name}
        </Link>
      </li>
    </ul>
  );
};

export default Links;