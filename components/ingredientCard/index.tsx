import styles from "./ingredientCard.module.scss";

interface PropType {
    measure: string;
    material: string;
    img?: string;
    unit?: string;
};

const IngredientCard = ({measure , material ,unit}:PropType) => {
    return <div className={styles.ingredientCardWrapper}>
        <div className={styles.title}>
            <div className={styles.amountContainer}>
                <span className={styles.measure}>{measure}</span>
                {unit ? <span className={styles.unit}>/{unit}</span> : null}
            </div>
            <p>{material}</p>
        </div>
    </div>
};

export default IngredientCard;