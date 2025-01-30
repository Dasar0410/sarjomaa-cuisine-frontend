import{ useState } from 'react';

function FilterSearch() {
    const [search, setSearch] = useState('');
    
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    
    return (
        <div className='flex items-center justify-center min-h-40 flex-col'>
        <p className='text-4xl'>Search Your Favorite Recipes</p>
        <input className='mt-4 ' type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
        />
        </div>
    );
    }

export default FilterSearch;