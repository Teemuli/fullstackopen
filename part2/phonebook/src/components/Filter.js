function Filter({filter, setFilter}){

    const handleFilterChange = (event) => {
        const filter = event.target.value.toLowerCase()
        setFilter(filter)
    }

    return (
        <div>
        filter shown with: <input value={filter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter;