import { Input } from './ui/input';

function FilterSearch({ onSearchChange }: { onSearchChange: (term: string) => void }) {
    
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };
    
    return (
        <div className='flex items-center justify-center min-h-40 flex-col mt-6'>
        <p className='text-3xl'>Søk etter oppskrifter</p>
        <div className='w-3/4 md:w-2/5 mt-6 mb-8'>
        <Input 
            className='bg-card'
            type="text" 
            placeholder="Skriv inn søkeord..." 
            onChange={handleSearch} 
        />
        </div>
        </div>
    );
    }

export default FilterSearch;