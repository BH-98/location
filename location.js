function updateRemoteStudents (arr) {
    const updatedArr  = arr.map(person => {
        updatedPerson = {...person}
        if (!updatedPerson.location) {
            updatedPerson.location = "remote"
        }
        return updatedPerson
    })
    return updatedArr
}

module.exports = updateRemoteStudents