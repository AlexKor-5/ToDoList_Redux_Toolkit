export let initialInputState = "Enter your task to do";

export let initialToDosState = [
    {
        id: "345-654",
        text: "buy some milk",
        completed: false
    },
    {
        id: "845-789",
        text: "do homework",
        completed: false,
        color: "blue"
    },
    {
        id: "697-001",
        text: "do nothing",
        completed: false,
        color: "red"
    }
];

export let initialFiltersState = {
    filterStatus: "All",
    filterCountOfStatuses: ["All", "Active", "Completed"],
    filterColors: []
};
