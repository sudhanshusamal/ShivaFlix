import React from "react";
import { Stack } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LanguageIcon from '@mui/icons-material/Language';
import ChildCareIcon from '@mui/icons-material/ChildCare';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
    const categories = [
        { name: 'New', icon: <HomeIcon />, },
        { name: 'Most Popular', icon: <StarIcon />, },
        { name: 'Movies', icon: <OndemandVideoIcon />, },
        { name: 'Dub', icon: <LanguageIcon />, },
        { name: 'Kids', icon: <ChildCareIcon />, },
    ];

    return (
        <Stack direction="row" sx={{
            overflowY: "auto",
            height: { xs: "auto", md: "95%" },
            flexDirection: { md: "column" },
        }}>
            {
                categories.map((category) => (
                    <button className="category-btn" onClick={() => setSelectedCategory(category.name)} style={{ background: category.name === selectedCategory && '#FC1503', color: 'white' }}
                        key={category.name}>
                        <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                ))
            }

        </Stack >
    )
}

export default SideBar;