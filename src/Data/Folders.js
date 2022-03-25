const folders = {
    "1": {
        title: "main_folder",
        items: [
            { id: "2", title: "Folder_2", type: "folder" },
            { id: "3", title: "Folder_3", type: "folder" },
            { id: "1", title: "Set_1", type: "set" },
        ],
    },
    "2": { title: "Folder_2", items: [{ id: "3", title: "Set_3", type: "set" }] },
    "3": {
        title: "Folder_2",
        items: [
            { id: "4", title: "Folder_4", type: "folder" },
            { id: "2", title: "Set_2", type: "set" },
        ],
    },
    "4": { title: "Folder_4", items: [] },
};

export {folders}