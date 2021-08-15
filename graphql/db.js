export const people = [
    {
        id : 1,
        name : "Nicolas",
        age : 18,
        gender : "female"
    },
    {
        id : 2,
        name : "Tesla",
        age : 28,
        gender : "male"
    }
]

export const getById = id => {
    const filtered = people.filter(person => person.id === id);
    return filtered[0];
}