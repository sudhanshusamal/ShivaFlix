import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from '@mui/icons-material'


const SearchBar = () => {
  const [keyw, setKeyw] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(keyw) {
      navigate(`search/${keyw}`)

      // setKeyw('')
    }
  }
  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius: 20, border:"1px solid #e3e3e3", pl:2, boxShadow:"none", mr:{sm:5} }}>
        <input className="search-bar" placeholder="Search..." value={keyw} onChange={(e) => setKeyw(e.target.value)}/>
    <IconButton type="Submit" sx={{ color: 'red'}}><Search /></IconButton> 
    </Paper>
  )
}

export default SearchBar;