import { useState } from "react";
import z from "zod";    //npm i zod

//! Schema de validation (Zod)
const queryValidation = z.string('L\'élément doit être une chaîne de caracteres')
    .trim()
    .min(2, 'Le terme rechercher doit faire minimum 2 caracteres');

//! Typage des props du composant
type SearchBarProps = {
    onSearch?: (query: string) => void;
    btnSearch?: string;
};

//! Composant React
export default function SearchBar({ 
    onSearch = () => {}, 
    btnSearch = 'Rechercher'
 }: SearchBarProps) {
    
    const [query, setQuery] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Validation du formulaire
        const { success, data, error } = z.safeParse(queryValidation, query);

        // Traitement si la validation échoue
        if (!success) {
            // console.log(z.formatError(error));
            // console.log(z.flattenError(error));
            // console.log(z.treeifyError(error));
            // console.log(z.prettifyError(error));
            
            setErrorMsg(z.prettifyError(error));
            return;
        }

        // Traitement si validation a réussi
        onSearch(data);
        setErrorMsg(null);
        setQuery('');
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <input type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">{btnSearch}</button>
            {' '}
            {errorMsg && (
               <span>{errorMsg}</span>
            )}
        </form>
    );
};