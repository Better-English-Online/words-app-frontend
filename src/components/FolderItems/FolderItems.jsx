import {NavLink} from 'react-router-dom'


const FolderItems = ({items}) => {
    return (
        <>
        {items.map(item => {
            if (item.type === 'folder') {
                    return <NavLink
                        style={{ color: "#c3f73a" }}
                        to={`/folders/${item.id}`}
                    >
                        {item.title}
                    </NavLink>
            } else if(item.type ==='set') {
                return <NavLink
                    style={{ color: "red" }}
                    to={`/sets/${item.id}`}
                >
                    {item.title}
                </NavLink>;
            }
        })}
        </>
    )
}

export default FolderItems