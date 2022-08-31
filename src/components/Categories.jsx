import React, {useState} from 'react';

function Categories() {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Закуски', 'Напитки']
    const [category, setCategory] = useState(0)

    const onClickCategory = (index) => {
        setCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((cat, index) =>
                        <li
                            key={cat + index}
                            className={category === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                        >
                            {cat}
                        </li>
                    )}

            </ul>
        </div>
    );
}

export default Categories;