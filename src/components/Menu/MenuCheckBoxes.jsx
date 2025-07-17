import s from './MenuCheckBoxes.module.css';

const MenuCheckBoxes = ({ filters }) => {
    return (
        <>
            {Object.entries(filters).map(([key, values]) => (
                <fieldset className={s.menuCheckBoxes} key={key}>
                    <legend>{key}</legend>
                    <div>
                        {values.map((value, index) => (
                            <label key={index}>
                                <input type="checkbox" />
                                {value}
                            </label>
                        ))}
                    </div>
                </fieldset>
            ))}
        </>
    );
};

export default MenuCheckBoxes;
