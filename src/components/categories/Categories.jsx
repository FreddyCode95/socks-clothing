import './Categories.scss';
import {DirectoryItem} from "./directoryItem/DirectoryItem";

export const Categories = ({categories}) => {

    return (
        <div className="categories-container">
            {categories.map((category) =>
                <DirectoryItem key={category.id} category={category} />
            ) }
        </div>
    );
};