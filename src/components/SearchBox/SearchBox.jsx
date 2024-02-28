export default function SearchBox({ value, onFilter}) {
    return (
        <div>
            {/* p  css.label*/}
            <p>Find contacts by name</p>  
            <input type="text" value={value}
                onChange={(e) => onFilter(e.target.value)}></input>
       </div> 
    )
}