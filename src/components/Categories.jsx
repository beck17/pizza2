import React from 'react';

function Categories({categories, category, onClickCategory}) {
    // const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Закуски', 'Напитки']
    // const [category, setCategory] = useState(0)

    // const onClickCategory = (index) => {
    //     setCategory(index)
    // }

    return (
        <div className="categories">
            <ul>
                <li
                    className={category === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}
                >
                    Все
                </li>
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