import React from 'react';

const Header = (props: { title: string}) => {
    return (
        <th scope="col" className="px-6 py-3">
            {props.title}
        </th>
    );
}

export default Header;